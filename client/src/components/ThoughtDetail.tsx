function BlogDetail() {
  return (
    <div className=' min-h-screen'>
      <div className=' mx-auto py-8 px-4'>
        <div className='rounded-lg shadow-md p-6'>
          <h1 className='text-3xl font-semibold  mb-4'>Blog Title</h1>
          <p className='text-sm  mb-4'>Published on July 1, 2023 by John Doe</p>
          <img
            src='/travel.png'
            alt='Blog'
            className='w-full h-96 object-cover rounded-md mb-6'
          />
          <p className=' text-lg leading-7'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.
          </p>
          <p className=' text-lg leading-7 mt-6'>
            Temporibus autem quibusdam et aut officiis debitis aut rerum
            necessitatibus saepe eveniet ut et voluptates repudiandae sint et
            molestiae non recusandae.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
