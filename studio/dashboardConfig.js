export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '61a9e7052b5ca3d60dc7f799',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qwxnxzz5',
                  apiId: '2d9b81e4-a8bb-447a-9845-57e73f76acd6'
                },
                {
                  buildHookId: '61a9e705ec7b1af46706511d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1a24kd62',
                  apiId: '7f7eb804-c529-47ff-9751-870fa2565fff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Prem0335/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1a24kd62.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
