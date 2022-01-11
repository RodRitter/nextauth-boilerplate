# Next Auth & MongoDB Boilerplate

This boilerplate has all the initial setup for authenticating users with a MongoDB adapter.

By default, there are `Google` and passwordless `Email` modules. See below for setup instructions.

## Getting Started

### `.env` Setup

These are the `.env` variables that you will need to include. If you don't need `Google` or `Email` authentication, then remove them from `pages/api/auth/[...nextAuth].js` file.

```
# Defaults
NEXTAUTH_URL="http://localhost:3000"
NODE_ENV="development"

# Next Auth: Secrets
SECRET=""
JWT_SECRET=""

# Next Auth: Database
MONGODB_URI=""

# Next Auth: Google Provider
GOOGLE_ID=""
GOOGLE_SECRET=""

# Next Auth: Email Provider
EMAIL_SERVER_USER=""
EMAIL_SERVER_PASSWORD=""
EMAIL_SERVER_HOST=""
EMAIL_SERVER_PORT=""
EMAIL_FROM=""
```
