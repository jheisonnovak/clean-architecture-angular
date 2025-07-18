# Clean Architecture Angular

This repository provides an example of implementing **Clean Architecture** using [Angular](https://angular.dev/).

## 🛠 Technologies

-   **Angular 20**
-   **Tailwind v4**

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
    ├── environments/
    ├── assets/
    │   └── images/

### Key Concepts

-   **Core**: Contains application-wide services, guards, and interceptors
-   **Features**: Each feature module encapsulates specific domain functionality
-   **Presentation**: Contains general UI elements and layout components
-   **Shared**: Reusable components, directives, and pipes

## 🚀 Getting Started

### Prerequisites

-   **Node.js** (version 20 or higher)
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

3. Copy the example environment files:

```bash
cp src/environments/environment.example.ts src/environments/environment.ts # linux/mac
# or
copy src\environments\environment.example.ts src\environments\environment.ts # windows
```

4. Run the application:

```bash
npm start
```

5. Access the application:
   Open your browser and navigate to [http://localhost:4200](http://localhost:4200)

## 🔗 Backend Integration

This frontend application is designed to work with the backend available at:
[Clean Architecture Spring](https://github.com/jheisonnovak/clean-architecture-spring)

## 📚 Learn More

-   [Angular Documentation](https://angular.dev/overview)
-   Clean Architecture - Robert C. Martin

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.
