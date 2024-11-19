//* Import Node Modules
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

//* Import Plugins
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
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
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      beforeLogin: [],
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
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
  },

  collections: [
    Media,
    Pages,
    BlogPosts,
    BlogCategories,
    Work,
    Playground,
    Services,
    FAQ,
    Brands,
    Pillars,
    Testimonials,
    Technologies,
    Journeys,
    Location,
    Results,
    Team,
    Users,
    Industries,
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
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
