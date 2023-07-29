export const useProjects = () => {
  return useState('projects', () => [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Nulla facilisi. Sed euismod, nunc vel aliquam aliquet, nisl nunc aliquet nunc, quis aliquam nunc nunc nec nunc.',
      urlImage: 'image1.jpg',
      images: ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg']
    },
    {
      title: 'Project 2',
      description: 'Delectus odio sed nesciunt eveniet placeat nobis corrupti aliquam blanditiis assumenda animi architecto illum ipsa.',
      urlImage: 'image2.jpg',
      images: ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg']
    },
    {
      title: 'Project 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus odio sed nesciunt eveniet placeat nobis corrupti aliquam blanditiis assumenda animi architecto illum ipsa, saepe, ad nemo modi atque accusamus debitis, dolorum autem aspernatur! Neque, mollitia fugiat nostrum veritatis aspernatur exercitationem.',
      urlImage: 'image3.jpg',
      images: ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg']
    },
    {
      title: 'Project 4',
      description: 'Consectetur adipisicing elit. Delectus odio sed nesciunt eveniet placeat nobis corrupti aliquam blanditiis assumenda animi architecto illum ipsa, saepe, ad nemo modi atque accusamus debitis, dolorum autem aspernatur! Neque, mollitia fugiat nostrum veritatis aspernatur exercitationem.',
      urlImage: 'image4.jpg',
      images: ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg']
    },
    {
      title: 'Project 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing corrupti aliquam blanditiis assumenda animi architecto illum ipsa, saepe, ad nemo modi atque accusamus debitis, dolorum autem aspernatur! Neque, mollitia fugiat nostrum veritatis aspernatur exercitationem.',
      urlImage: 'image5.jpg',
      images: ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg']
    },
    {
      title: 'Project 6',
      description: 'Delectus odio sed nesciunt eveniet placeat nobis corrupti aliquam blanditiis assumenda animi architecto illum ipsa, saepe, ad nemo modi atque accusamus debitis, dolorum autem aspernatur! Neque, mollitia fugiat nostrum veritatis aspernatur exercitationem. Nesciunt eveniet placeat nobis corrupti aliquam blanditiis assumenda animi architecto illum ipsa, saepe, ad nemo modi atque accusamus debitis, dolorum autem aspernatur! Neque, mollitia fugiat nostrum veritatis aspernatur exercitationem.',
      urlImage: 'image6.jpg',
      images: ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg']
    },
  ]);
}