type Project = {
  name: string
  description: string
  link: string
  video?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'API BlibliotecaKA',
    description:
      'BiblioteKA é um sistema web para gestão de biblioteca, com controle de livros, empréstimos, reservas e autenticação de usuários. Projeto estudantil desenvolvido em equipe com foco em colaboração.',
    link: 'https://m5-t15-deployfinalproject.onrender.com/api/docs/#/',
    video:
      'https://github.com/ja1rocambole/embed-video/raw/refs/heads/main/bibliotecaKA.mp4',
    id: 'project1',
  },

  {
    name: 'Coin Tracker',
    description:
      'Aplicação web para gestão de criptomoedas, permitindo acompanhar o patrimônio em tempo real com conversão das principais moedas digitais do mercado para real.',
    link: 'https://motion-primitives.com/',
    video:
      'https://github.com/ja1rocambole/embed-video/raw/refs/heads/main/coin%20tracker.mp4',
    id: 'project2',
  },
  {
    name: 'Log Habit',
    description:
      'Aplicação web para estudo de back-end com estrutura organizada e evolução incremental em PHP e Laravel. O projeto explora persistência de dados, regras de negócio, validação de entradas e manutenção de funcionalidades.',
    link: 'https://github.com/ja1rocambole/log-habit',
    video:
      'https://github.com/ja1rocambole/embed-video/raw/refs/heads/main/log-habit.mp4',
    id: 'project3',
  },
  {
    name: 'Clone do TabNews',
    description:
      'Aplicação full-stack com Node.js, PostgreSQL, migrations e Docker. O projeto trabalha TDD, CI/CD, autenticação, autorização, API REST, versionamento e práticas de qualidade de código.',
    link: 'https://clone-tabnews-khaki-eight-79.vercel.app/',
    video:
      'https://github.com/ja1rocambole/embed-video/raw/refs/heads/main/clone-tabnews.mp4',
    id: 'project4',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'CS-Consoft',
    title: 'Desenvolvedor Frontend',
    start: 'Set/2025',
    end: 'Dez/2025',
    link: 'https://www.linkedin.com/in/joao-fernandes-da-silva-neto/details/experience/',
    id: 'work1',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Como a IA está mudando o design de interfaces',
    description:
      'Uma análise de como ferramentas inteligentes estão influenciando o UX/UI',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Como a IA está mudando o design de interfaces',
    description:
      'Uma análise de como ferramentas inteligentes estão influenciando o UX/UI',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Decidi mudar de carreira: da engenharia à programação',
    description:
      'Relato pessoal sobre a transição de área e os desafios enfrentados',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'Primeiro ano como freelancer: o que ninguém te conta',
    description:
      'Experiências reais sobre clientes, dinheiro e gestão de tempo',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ja1rocambole',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/joao-fernandes-da-silva-neto/',
  },
  {
    label: 'Whatsapp',
    link: 'https://api.whatsapp.com/send/?phone=5591987044516&text=Ol%C3%A1+Jo%C3%A3o%2C+acessei+seu+portf%C3%B3lio+e+gostaria+de+conversar+sobre+uma+oportunidade%21&type=phone_number&app_absent=0',
  },
]

export const EMAIL = 'joaofernandes8077@gmail.com'
