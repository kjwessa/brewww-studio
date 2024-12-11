//* Import Node Modules
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

//* Import Plugins
import { postgresAdapter } from '@payloadcms/db-postgres'
import { plugins } from './plugin'
import { defaultLexical } from './fields/defaultLexical'

//* Import Collections
import { BlogCategories } from '@/collections/BlogCategories/config'
import { BlogPosts } from '@/collections/BlogPosts/config'
import { Brands } from '@/collections/Brands/config'
import { FAQ } from '@/collections/FAQ/config'
import { Industries } from './collections/Industries/config'
import { Journeys } from '@/collections/Journeys/config'
import { Location } from '@/collections/Locations/config'
import { Media } from '@/collections/Media/config'
import { Pages } from '@/collections/Pages/config'
import { Pillars } from '@/collections/Pillars/config'
import { Playground } from '@/collections/Play/config'
import { Results } from '@/collections/Results/config'
import { Services } from '@/collections/Services/config'
import { Team } from '@/collections/Team/config'
import { Technologies } from '@/collections/Technologies/config'
import { Testimonials } from '@/collections/Testimonials/config'
import { Users } from '@/collections/Users/config'
import { Work } from '@/collections/Work/config'

//* Import Globals
import { Header } from './globals/Header/index'
import { Footer } from './globals/Footer/index'

//* Get File Path
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

//* Build Configuration
export default buildConfig({
  admin: {
    components: {
      beforeLogin: [],
      beforeDashboard: [],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
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
    user: Users.slug,
    autoLogin:
      process.env.NODE_ENV === 'development'
        ? {
            email: process.env.PAYLOAD_ADMIN_EMAIL,
            password: process.env.PAYLOAD_ADMIN_PASSWORD,
          }
        : false,
  },

  collections: [
    Media,
    Users,
    Pages,
    BlogPosts,
    BlogCategories,
    Location,
    Work,
    FAQ,
    Brands,
    Technologies,
    Testimonials,
    Services,
    Pillars,
    Playground,
    Results,
    Industries,
    Team,
    Journeys,
  ],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL,
      max: process.env.NODE_ENV === 'production' ? 50 : 25,
      connectionTimeoutMillis: 30000,
      idleTimeoutMillis: 60000,
    },
    push: false,
    migrationDir: './src/migrations',
    idType: 'uuid',
  }),
  editor: defaultLexical,
  globals: [Header, Footer],
  plugins: [...plugins],
  secret: process.env.PAYLOAD_SECRET || '',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
