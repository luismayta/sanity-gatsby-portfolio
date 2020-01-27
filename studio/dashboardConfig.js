export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e2eea8a1ecc927123c06a70',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-kiso3qfe',
                  apiId: 'a9d38222-231c-48ac-b649-aa5d449a45d6'
                },
                {
                  buildHookId: '5e2eea8ae3ba018b983b1ec5',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-9j4ozdc2',
                  apiId: '9acbf9ff-4aec-4cc5-995b-3051f6e9da39'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/luismayta/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-9j4ozdc2.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
