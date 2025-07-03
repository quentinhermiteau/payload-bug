import fs from 'fs/promises'
import path from 'path'
import { Payload } from 'payload'

export const seedGlobals = async (payload: Payload) => {
  const logoBuffer = await fs.readFile(path.normalize(`${process.cwd()}/src/seed/LogoRATP.png`))
  const logo = await payload.create({
    collection: 'media',
    data: {
      alt: 'Logo',
    },
    file: {
      name: 'LogoRATP',
      data: logoBuffer,
      mimetype: 'image/png',
      size: 6020,
    },
  })

  const subMenuBuffer = await fs.readFile(
    path.normalize(`${process.cwd()}/src/seed/Engagement.png`),
  )
  const subMenu = await payload.create({
    collection: 'media',
    data: {
      alt: 'Logo',
    },
    file: {
      name: 'Engagement',
      data: subMenuBuffer,
      mimetype: 'image/png',
      size: 112243, // TODO get size dynamically
    },
  })

  await payload.updateGlobal({
    slug: 'header',
    data: {
      ecoindex: {
        ecoindexText: 'écoindex',

        link: {
          type: 'custom',
          newTab: null,
          url: 'google.fr',
        },

        richText: {
          root: {
            type: 'root',
            format: '',
            indent: 0,
            version: 1,

            children: [
              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Ce site web est durable',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 1,
                    version: 1,
                  },
                  {
                    type: 'linebreak',
                    version: 1,
                  },
                  {
                    mode: 'normal',
                    text: 'et basse consommation',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                textStyle: '',
                textFormat: 0,
              },
            ],
            direction: 'ltr',
          },
        },
      },

      languages: [
        {
          countryLabel: 'fr',
          countryCode: 'fr',
        },
        {
          countryLabel: 'en',
          countryCode: 'en',
        },
      ],

      logo: { image: logo },

      navItems: [
        {
          label: 'Solutions et expertises',
          description:
            'Découvrez les expertises du groupe RATP portées par ses filiales pour répondre à vos besoins.',

          image: subMenu,

          subNavItems: [
            {
              link: [
                {
                  icon: 'chevron-right',
                  positionIcon: 'left',
                  blockName: null,
                  blockType: 'link',

                  link: {
                    type: 'custom',
                    newTab: null,
                    url: 'google.fr',
                    label: 'Mobilité urbaine : le groupe RATP répond aux défis',
                  },
                },
              ],
            },
            {
              link: [
                {
                  icon: 'chevron-right',
                  positionIcon: 'left',
                  blockName: null,
                  blockType: 'link',

                  link: {
                    type: 'custom',
                    newTab: null,
                    url: 'google.fr',
                    label: 'Maintenance et gestion innovante des infrastructures',
                  },
                },
              ],
            },
            {
              link: [
                {
                  icon: 'chevron-right',
                  positionIcon: 'left',
                  blockName: null,
                  blockType: 'link',

                  link: {
                    type: 'custom',
                    newTab: null,
                    url: 'google.fr',
                    label: 'Réalisations',
                  },
                },
              ],
            },
            {
              link: [
                {
                  icon: 'chevron-right',
                  positionIcon: 'left',
                  blockName: null,
                  blockType: 'link',

                  link: {
                    type: 'custom',
                    newTab: null,
                    url: 'google.fr',
                    label: 'Immobilier et services urbains',
                  },
                },
              ],
            },
            {
              link: [
                {
                  icon: 'chevron-right',
                  positionIcon: 'left',
                  blockName: null,
                  blockType: 'link',

                  link: {
                    type: 'custom',
                    newTab: null,
                    url: 'google.fr',
                    label: 'Opérateur de sûreté des voyageurs et agents',
                  },
                },
              ],
            },
          ],

          button: [
            {
              style: 'primary',
              label: 'Solutions et expertises',
              icon: null,
              positionIcon: null,
              blockName: null,
              blockType: 'button',

              link: {
                type: 'custom',
                newTab: null,
                url: 'google.fr',
              },
            },
          ],
        },
      ],
    },
  })

  return Promise.all([
    payload.updateGlobal({
      slug: 'footer',
      data: {
        logo: logo,
        columns: [
          {
            title: 'Navigation',
            elements: [
              {
                blockType: 'link',
                link: {
                  type: 'custom',
                  label: 'Solutions et expertises',
                  url: 'https://google.fr',
                },
              },
              {
                blockType: 'link',
                link: {
                  type: 'custom',
                  label: 'Engagements et innovation',
                  url: 'https://google.fr',
                },
              },
              {
                blockType: 'link',
                link: {
                  type: 'custom',
                  label: 'Offres d’emploi du groupe RATP',
                  url: 'https://google.fr',
                },
              },
              {
                blockType: 'link',
                link: {
                  type: 'custom',
                  label: 'Médias et publications',
                  url: 'https://google.fr',
                },
              },
              {
                blockType: 'link',
                link: {
                  type: 'custom',
                  label: 'Le groupe RATP',
                  url: 'https://google.fr',
                },
              },
            ],
          },
          {
            title: 'Conformité',
            elements: [
              {
                blockType: 'link',
                link: {
                  type: 'custom',
                  label: 'Données personnelles',
                  url: 'https://google.fr',
                },
              },
              {
                blockType: 'link',
                link: {
                  type: 'custom',
                  label: 'Accessibilité : partiellement conforme',
                  url: 'https://google.fr',
                },
              },
              {
                blockType: 'link',
                link: {
                  type: 'custom',
                  label: 'Notre démarche d’éco-conception',
                  url: 'https://google.fr',
                },
              },
              {
                blockType: 'link',
                link: {
                  type: 'custom',
                  label: 'Déclaration environnementale ratpgroup.com',
                  url: 'https://google.fr',
                },
              },
            ],
          },
          {
            title: 'Nos sites RATP',
            elements: [
              {
                blockType: 'link',
                link: {
                  type: 'custom',
                  label: 'RATP.fr',
                  url: 'https://google.fr',
                  newTab: true,
                },
                icon: 'arrow-up-right',
                positionIcon: 'right',
              },
              {
                blockType: 'link',
                link: {
                  type: 'custom',
                  label: 'Le site du médiateur',
                  url: 'https://google.fr',
                  newTab: true,
                },
                icon: 'arrow-up-right',
                positionIcon: 'right',
              },
              {
                blockType: 'link',
                link: {
                  type: 'custom',
                  label: 'Fondation Groupe RATP',
                  url: 'https://google.fr',
                  newTab: true,
                },
                icon: 'arrow-up-right',
                positionIcon: 'right',
              },
              {
                blockType: 'link',
                link: {
                  type: 'custom',
                  label: 'Quai des ressources',
                  url: 'https://google.fr',
                  newTab: true,
                },
                icon: 'arrow-up-right',
                positionIcon: 'right',
              },
            ],
          },
          {
            title: 'Suivez-nous',
            elements: [
              {
                blockType: 'link',
                link: {
                  type: 'custom',
                  label: 'Linkedin',
                  url: 'https://google.fr',
                  newTab: true,
                },
                icon: 'arrow-up-right',
                positionIcon: 'right',
              },
              {
                blockType: 'link',
                link: {
                  type: 'custom',
                  label: 'X Groupe',
                  url: 'https://google.fr',
                  newTab: true,
                },
                icon: 'arrow-up-right',
                positionIcon: 'right',
              },
              {
                blockType: 'link',
                link: {
                  type: 'custom',
                  label: 'X Territoires',
                  url: 'https://google.fr',
                  newTab: true,
                },
                icon: 'arrow-up-right',
                positionIcon: 'right',
              },
            ],
          },
          {
            elements: [
              {
                blockType: 'card',
                style: 'square',
                primaryColor: 'bg-secondary-200',
                secondaryColor: 'secondary-400',
                title: {
                  root: {
                    type: 'root',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        type: 'paragraph',
                        format: '',
                        indent: 0,
                        version: 1,

                        children: [
                          {
                            mode: 'normal',
                            text: 'Une question ? Contactez-nous !',
                            type: 'text',
                            style: '',
                            detail: 0,
                            format: 0,
                            version: 1,
                          },
                        ],
                        direction: 'ltr',
                        textStyle: '',
                        textFormat: 0,
                      },
                    ],
                    direction: 'ltr',
                  },
                },
                buttonLink: [
                  {
                    blockType: 'button',
                    label: 'Nous contacter',
                    style: 'primary',
                    link: {
                      type: 'custom',
                      url: 'https://google.fr',
                      newTab: true,
                    },
                  },
                ],
              },
              {
                blockType: 'card',
                style: 'square',
                primaryColor: 'bg-white',
                secondaryColor: 'primary-200',
                title: {
                  root: {
                    type: 'root',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        type: 'paragraph',
                        format: '',
                        indent: 0,
                        version: 1,

                        children: [
                          {
                            mode: 'normal',
                            text: 'Espace presse',
                            type: 'text',
                            style: '',
                            detail: 0,
                            format: 0,
                            version: 1,
                          },
                        ],
                        direction: 'ltr',
                        textStyle: '',
                        textFormat: 0,
                      },
                    ],
                    direction: 'ltr',
                  },
                },
                buttonLink: [
                  {
                    blockType: 'button',
                    label: 'Contacts presse',
                    style: 'primary-outline',
                    icon: 'arrow-up-right',
                    positionIcon: 'right',
                    link: {
                      type: 'custom',
                      url: 'https://google.fr',
                      newTab: true,
                    },
                  },
                ],
              },
            ],
          },
        ],
        bottomBanner: {
          navItems: [
            {
              link: {
                type: 'custom',
                label: 'Mentions légales',
                url: 'https://google.fr',
              },
            },
            {
              link: {
                type: 'custom',
                label: 'Données personnelles',
                url: 'https://google.fr',
              },
            },
            {
              link: {
                type: 'custom',
                label: 'Gestion des cookies',
                url: 'https://google.fr',
              },
            },
          ],
        },
      },
    }),
  ])
}
