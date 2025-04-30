# CleanArchitectureAngular

    src/
    │
    ├── app/
    │   ├── core/
    │   │   ├── services/
    │   │   ├── models/
    │   │   ├── interceptors/
    │   │   ├── guards/
    │   │   ├── constants/
    │   │   └── utils/
    │   │
    │   ├── features/
    │   │   ├── feature-1/
    │   │   │   ├── components/
    │   │   │   ├── pages/
    │   │   │   ├── store/
    │   │   │   ├── services/
    │   │   │   ├── models/
    │   │   │   └── feature-1.module.ts
    │   │   │
    │   │   ├── feature-2/
    │   │   │   ├── components/
    │   │   │   ├── pages/
    │   │   │   ├── store/
    │   │   │   ├── services/
    │   │   │   ├── models/
    │   │   │   └── feature-2.module.ts
    │   │   │
    │   │   └── ...
    │   │
    │   ├── shared/
    │   │   ├── components/
    │   │   ├── directives/
    │   │   ├── pipes/
    │   │   ├── modules/
    │   │   ├── services/
    │   │   └── utils/
    │   │
    │   ├── presentation/
    │   │   ├── layout/
    │   │   └── common-components/
    │   │
    │   └── app.module.ts
    │
    ├── environments/
    │   ├── environment.ts
    │   └── environment.prod.ts
    │
    ├── assets/
    │   └── images/
    │
    └── index.html
