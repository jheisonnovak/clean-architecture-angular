# Clean Architecture Angular Example

This repository provides an example of implementing **Clean Architecture** using [Angular](https://angular.io/).

## 🛠 Technologies

-   **Angular 16+**
-   **NgRx Store**
-   **RxJS**

## 📁 Project Structure

The project follows a modular approach with a layered architecture, adhering to Clean Architecture principles:

    src/
    ├── app/
    │   ├── core/
    │   │   ├── constants/
    │   │   ├── guards/
    │   │   ├── interceptors/
    │   │   ├── models/
    │   │   ├── services/
    │   │   └── utils/
    │   ├── features/
    │   │   ├── feature-example/
    │   │   │   ├── components/
    │   │   │   ├── models/
    │   │   │   ├── pages/
    │   │   │   ├── services/
    │   │   │   ├── stores/
    │   │   │   └── feature-example.module.ts
    │   │   └── ...
    │   ├── presentation/
    │   │   ├── layout/
    │   │   └── common-components/
    │   ├── shared/
    │   │   └── ...
    │   └── app.module.ts
    ├── environments/
    │   ├── environment.ts
    │   └── environment.prod.ts
    ├── assets/
    │   └── images/
    └── index.html

### Key Concepts

-   **Core**: Contains application-wide services, guards, and interceptors
-   **Features**: Each feature module encapsulates specific domain functionality
-   **Presentation**: Handles layout and common UI components
-   **Shared**: Reusable components, directives, and pipes

## 🚀 Getting Started

### Prerequisites

-   **Node.js** (version 16 or higher)
-   **npm** or **yarn**

### Installation

1. Clone this repository:

```bash
git clone https://github.com/your-username/clean-architecture-angular.git
cd clean-architecture-angular
```

2. Install dependencies:

```bash
npm install
```

3. Run the application:

```bash
npm start
```

4. Access the application:
   Open your browser and navigate to [http://localhost:4200](http://localhost:4200)

## 🔗 Backend Integration

This frontend application is designed to work with the backend available at:
[Clean Architecture Spring](https://github.com/jheisonnovak/clean-architecture-spring)

## 📚 Learn More

-   [Angular Documentation](https://angular.io/docs)
-   [NgRx Store Documentation](https://ngrx.io/)
-   Clean Architecture - Robert C. Martin

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.
