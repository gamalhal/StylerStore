# Styler Store - Modern E-commerce Platform

> **Developed by:** [Gamal Hal](https://github.com/gamalhal)  
> **Project Type:** E-commerce Website  
> **Technology:** Next.js 15, TypeScript, Tailwind CSS, Prisma

A beautiful, modern e-commerce website built with Next.js 15, TypeScript, and Tailwind CSS. This project replicates the functionality and design of a professional fashion store with advanced features and smooth animations.

## 👨‍💻 Developer

**Gamal Hal** - Full Stack Developer  
- **GitHub:** [@gamalhal](https://github.com/gamalhal)
- **Skills:** Next.js, React, TypeScript, Node.js, Prisma, Tailwind CSS
- **Project:** Styler Store - Modern E-commerce Platform

## 🚀 Features

### Frontend
- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Product Catalog**: Browse products by categories with filtering and search
- **Shopping Cart**: Persistent cart with Zustand state management
- **Wishlist**: Add products to wishlist functionality
- **Product Reviews**: Star ratings and customer reviews
- **Newsletter Subscription**: Email subscription with validation
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Backend & Database
- **Next.js API Routes**: Server-side API endpoints
- **Prisma ORM**: Type-safe database operations
- **PostgreSQL**: Robust relational database
- **Authentication**: NextAuth.js with multiple providers
- **Payment Integration**: Stripe payment processing

### User Experience
- **Smooth Animations**: Framer Motion for delightful interactions
- **Loading States**: Skeleton loaders and spinners
- **Toast Notifications**: User feedback with react-hot-toast
- **Form Validation**: Client and server-side validation
- **SEO Optimized**: Meta tags and structured data

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Zustand** - Lightweight state management
- **React Hook Form** - Form handling
- **Lucide React** - Beautiful icons

### Backend
- **Next.js API Routes** - Server-side API
- **Prisma** - Database ORM
- **PostgreSQL** - Database
- **NextAuth.js** - Authentication
- **Stripe** - Payment processing
- **bcryptjs** - Password hashing

### Development
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd styler-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Update the `.env.local` file with your configuration:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/styler_store"
   
   # NextAuth.js
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"
   
   # Stripe
   STRIPE_PUBLISHABLE_KEY="pk_test_your_stripe_publishable_key"
   STRIPE_SECRET_KEY="sk_test_your_stripe_secret_key"
   STRIPE_WEBHOOK_SECRET="whsec_your_webhook_secret"
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npm run db:generate
   
   # Push schema to database
   npm run db:push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Setup

### Prisma Schema
The project includes a comprehensive database schema with the following models:

- **User** - User accounts and authentication
- **Product** - Product catalog with variants
- **Category** - Product categories
- **Order** - Customer orders
- **Review** - Product reviews and ratings
- **Cart** - Shopping cart items

### Database Commands
```bash
# Generate Prisma client
npm run db:generate

# Push schema changes
npm run db:push

# Open Prisma Studio
npm run db:studio
```

## 🎨 Customization

### Styling
The project uses Tailwind CSS with a custom design system:

- **Primary Colors**: Orange-based color palette
- **Secondary Colors**: Gray scale for text and backgrounds
- **Components**: Reusable UI components in `components/ui/`
- **Animations**: Smooth transitions and micro-interactions

### Configuration
- **Tailwind Config**: `tailwind.config.js`
- **TypeScript Config**: `tsconfig.json`
- **Next.js Config**: `next.config.js`

## 📱 Pages & Components

### Pages
- **Home** (`/`) - Landing page with hero, categories, and featured products
- **Shop** (`/shop`) - Product catalog with filtering
- **Product Details** (`/product/[id]`) - Individual product page
- **Cart** (`/cart`) - Shopping cart
- **Checkout** (`/checkout`) - Payment and order completion
- **Profile** (`/profile`) - User account management
- **Orders** (`/orders`) - Order history

### Components
- **Layout**: Header, Footer, Navigation
- **UI**: Button, Input, Badge, Loading
- **Sections**: Hero, Categories, FeaturedProducts, Newsletter
- **Product**: ProductCard, ProductGrid, ProductDetails
- **Cart**: CartItem, CartSummary

## 🔧 API Routes

### Authentication
- `POST /api/auth/signin` - User sign in
- `POST /api/auth/signup` - User registration
- `GET /api/auth/session` - Get current session

### Products
- `GET /api/products` - Get all products
- `GET /api/products/[id]` - Get product by ID
- `GET /api/categories` - Get all categories

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get user orders
- `GET /api/orders/[id]` - Get order details

### Payments
- `POST /api/payments/create-intent` - Create payment intent
- `POST /api/payments/webhook` - Stripe webhook handler

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Unsplash** - Beautiful product images
- **Lucide** - Icon library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Next.js Team** - Amazing React framework

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact us at hello@stylerstore.com.

---

**Happy coding! 🎉** 