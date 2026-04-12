b2b-backend/
│
├── src/
│
│   ├── config/
│   │   ├── db.js
│   │   ├── env.js
│   │   └── logger.js
│
│   ├── constants/
│   │   ├── roles.js
│   │   ├── orderStatus.js
│   │   ├── paymentStatus.js
│   │   ├── userStatus.js        🔥 (PENDING / APPROVED)
│   │   └── vendorStatus.js
│
│   ├── modules/
│
│   │   ├── auth/
│   │   │   ├── auth.controller.js
│   │   │   ├── auth.service.js
│   │   │   ├── auth.routes.js
│   │   │   ├── auth.validation.js
│   │   │   └── auth.repository.js
│   │
│   │   ├── user/
│   │   │   ├── user.controller.js
│   │   │   ├── user.service.js
│   │   │   ├── user.routes.js
│   │   │   ├── user.validation.js
│   │   │   ├── user.repository.js
│   │   │   └── user.model.js
│   │
│   │   ├── company/              
│   │   │   ├── company.controller.js
│   │   │   ├── company.service.js
│   │   │   ├── company.routes.js
│   │   │   ├── company.validation.js
│   │   │   ├── company.repository.js
│   │   │   └── company.model.js
│   │
│   │   ├── product/
│   │   │   ├── product.controller.js
│   │   │   ├── product.service.js
│   │   │   ├── product.routes.js
│   │   │   ├── product.validation.js
│   │   │   ├── product.repository.js
│   │   │   └── product.model.js
│   │
│   │   ├── order/
│   │   │   ├── order.controller.js
│   │   │   ├── order.service.js
│   │   │   ├── order.routes.js
│   │   │   ├── order.validation.js
│   │   │   ├── order.repository.js
│   │   │   └── order.model.js
│   │
│   │   ├── vendor/
│   │   │   ├── vendor.controller.js
│   │   │   ├── vendor.service.js
│   │   │   ├── vendor.routes.js
│   │   │   ├── vendor.validation.js
│   │   │   ├── vendor.repository.js
│   │   │   └── vendor.model.js
│   │
│   │   ├── admin/
│   │   │   ├── admin.controller.js
│   │   │   ├── admin.service.js
│   │   │   ├── admin.routes.js
│   │   │   └── admin.repository.js
│
│   ├── common/                  🔥 CLEAN SHARED LAYER
│   │   ├── middlewares/
│   │   ├── utils/
│   │   ├── validators/
│   │   ├── errors/
│
│   ├── infrastructure/          🔥 EXTERNAL SERVICES
│   │   ├── payment/
│   │   │   └── razorpay.service.js
│   │   ├── email/
│   │   │   └── email.service.js
│   │   ├── vendor/
│   │   │   └── assignment.service.js
│   │
│   ├── routes/
│   │   ├── index.js
│   │   └── v1.routes.js
│
│   ├── jobs/
│   │   ├── orderCleanup.job.js
│
│   ├── docs/
│   │   └── swagger.js
│
│   ├── uploads/
│
│   └── app.js
│
├── logs/
├── tests/
├── .env
├── server.js