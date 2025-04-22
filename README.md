# Plated

Plated is a recipe management platform built with [Next.js](https://nextjs.org). It allows users to create, manage, and share recipes with others. The platform supports features like saving recipes, publishing drafts, and tagging recipes for better categorization.

## Features

- **Recipe Creation**: Users can create recipes with detailed instructions, ingredients, and additional metadata like cook time, servings, and difficulty.
- **Draft Management**: Save recipes as drafts and publish them later.
- **Tagging**: Add tags to recipes for better organization and searchability.
- **User Profiles**: View recipes created by specific users.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying files in the `app` directory. The page auto-updates as you edit the file.

## API Endpoints

- **POST /api/addRecipe**: Add a new recipe to the database.
- **POST /api/deleteRecipe**: Delete a recipe by its ID.
- **POST /api/publishRecipe**: Publish a draft recipe.
- **POST /api/getRecipeUser**: Fetch user details for a specific recipe.

## Contributing

We welcome contributions to Plated! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with clear messages.
4. Submit a pull request for review.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

Plated can be deployed on [Vercel](https://vercel.com) for production. Follow the [Vercel deployment guide](https://nextjs.org/docs/deployment) for more details.
