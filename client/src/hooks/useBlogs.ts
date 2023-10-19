import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { Post } from "../components/Card";

const useBlogs = () => {
  const [blogs, setBlogs] = useState<Post[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get("/blog/", { signal: controller.signal })
      .then((res) => {
        setLoading(false);
        setBlogs(res.data);
      })
      .catch((err) => {
        setLoading(false);
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);
  return { blogs, error, isLoading };
};

export default useBlogs;
