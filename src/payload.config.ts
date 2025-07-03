// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
  ParagraphFeature,
} from '@payloadcms/richtext-lexical'
import { fr } from '@payloadcms/translations/languages/fr'
import fs from 'fs'
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import sharp from 'sharp'; // sharp-import
import { fileURLToPath } from 'url'

import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Users } from './collections/Users'
import { Footer } from './Footer/config'
import { Header } from './Header/config'
import { plugins } from './plugins'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const sslFileName = '/etc/ssl/certs/eu-west-3-bundle.pem'
let cert = ''

if (fs.existsSync(sslFileName)) {
  const sslFile = fs.readFileSync(sslFileName, { encoding: 'base64' }).toString()
  cert = Buffer.from(sslFile, 'base64').toString('utf-8')
}

export default buildConfig({
  graphQL: {
    disable: true,
  },
  admin: {
    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeLogin` statement on line 15.
      beforeLogin: ['@/components/BeforeLogin'],
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeDashboard` statement on line 15.
      beforeDashboard: ['@/components/BeforeDashboard'],
      graphics: {
        Logo: '@/components/Logo',
        Icon: '@/components/Logo',
      },
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  i18n: {
    fallbackLanguage: 'fr',
    supportedLanguages: {
      fr,
    },
  },
  localization: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    fallback: false,
  },
  editor: lexicalEditor({
    features() {
      return [FixedToolbarFeature(), InlineToolbarFeature(), ParagraphFeature()]
    },
  }),
  db: postgresAdapter({
    pool: {
      database: process.env.DATABASE_NAME ?? '',
      user: process.env.DATABASE_USER ?? '',
      password: process.env.DATABASE_PASSWORD ?? '',
      host: process.env.DATABASE_HOST ?? '',
      port: parseInt(process.env.DATABASE_PORT ?? '5432'),
      ssl:
        (process.env.DISABLE_SSL ?? false)
          ? false
          : {
              ca: cert,
            },
    },
  }),
  collections: [Pages, Media, Users],
  cors: undefined,
  globals: [Header, Footer],
  plugins: [...plugins],
  secret: process.env.PAYLOAD_SECRET ?? '',
  sharp,
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged in users to execute this endpoint (default)
        if (req.user) return true

        // If there is no logged in user, then check
        // for the Vercel Cron secret to be present as an
        // Authorization header:
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },
  endpoints: [
    {
      path: '/health',
      method: 'get',
      handler: () => {
        return Response.json({ status: 'OK' })
      },
    },
  ],
  upload: {
    abortOnLimit: true,
    limits: {
      fileSize: 8000000,
    },
    responseOnLimit: 'Fichier trop volumineux, la taille maximale est de 8 Mo.',
  },
  logger: {
    options: {
      level: 'debug',
    },
  },
})
