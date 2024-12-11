const projectsObjectRaw = {
  bifrost: {
    titleEN: "Neo-bifrost",
    titleES: "Neo-bifrost",
    en: [
      `The system uses an API to manage authentication through
          JWT (JSON Web Tokens) signed with asynchronous cryptographic keys.
          Users log in via a frontend, where credentials are validated by the API
          using a repository that manages user and station data. If the credentials
          are correct, a JWT signed with a private key is generated, containing
          user information, permissions, and an expiration time.`,
      `Applications consuming the API, such as Sinewave-drawer, verify
          the JWTs using the public key, ensuring the tokens are genuine
          and have not expired. Tokens expire after a set time, and to obtain a
          new one, the user must use a refresh token or authenticate again. The system
          follows the repository pattern to separate data and business logic,
          facilitating maintenance and scalability.`,
    ],
    es: [
      `El sistema utiliza una API para gestionar la autenticación mediante
          JWT (JSON Web Tokens) firmados con llaves criptográficas asincrónicas.
          Los usuarios inician sesión a través de un frontend, donde las
          credenciales son validadas por la API utilizando un repositorio que
          gestiona los datos de usuarios y estaciones. Si las credenciales son
          correctas, se genera un JWT firmado con una llave privada que contiene
          información del usuario, permisos y un tiempo de expiración.`,
      `Las aplicaciones que consumen la API, como Sinewave-drawer, verifican
          los JWT usando la llave pública, asegurando que los tokens sean
          genuinos y no hayan expirado. Los tokens vencen después de un tiempo
          establecido y, para obtener uno nuevo, el usuario debe usar un token
          de actualización o autenticarse nuevamente. El sistema sigue el patrón
          repositorio para separar la lógica de datos y negocio, lo que facilita
          su mantenimiento y escalabilidad.`,
    ],
    numberColumn: 2,
    images: ["bifrost2", "bifrost1", "bifrost3", "bifrost4", "bifrost5"],
    tags: ["csharp", "react", "jwt"],
    primaryColor: "gray",
    textStyle: `text-6xl text-slate-700 tracking-widest text-2xl pepe `,
  },
  sinewave: {
    titleEN: "Sinewave Drawer",
    titleES: "Sinewave Drawer",
    en: [
      `Sinewave-drawer is a system designed to manage inventory closures
          at the gas filling stations of the Marti group, owners of Tropigas.
          The system tracks details of gas gallons dispensed, products sold, and
          cash deposits or gas receipts. The process is handled through a
          step-by-step flow that ensures accuracy and traceability of operations
          at each station.`,
      `On the frontend, sales and inventory-related data are stored and
          later synchronized with the API for storage and processing. This API
          communicates with the neo-bifrost API to validate JWT (JSON Web Tokens)
          and ensure secure and legitimate interactions. The system also manages
          initial and final gas inventories and configurations stored for each station.`,
      `Sinewave-drawer includes key features such as a history system
          to record operations and a reporting tool to generate detailed
          reports on transactions. This enables administrators and operators
          to maintain precise and reliable control of operations at the gas
          filling stations. It is possibly the longest project I have developed
          from scratch to date.`,
    ],
    es: [
      `Sinewave-drawer es un sistema diseñado para gestionar los cierres de
          inventario en las estaciones envasadoras de gas del grupo Marti,
          propietarios de Tropigas. El sistema realiza un seguimiento detallado
          de los galones de gas dispensados, los productos vendidos, y los
          depósitos de efectivo o recepciones de gas. El proceso se maneja a
          través de un flujo paso a paso que asegura la precisión y trazabilidad
          de las operaciones en cada estación.`,
      `En el frontend, se almacenan los datos relacionados con las ventas y
          el inventario, que luego se sincronizan con la API para ser
          almacenados y procesados. Esta API, a su vez, se comunica con la API
          de neo-bifrost para validar los JWT (JSON Web Tokens) y asegurar que
          las interacciones sean seguras y legítimas. El sistema también
          gestiona los inventarios iniciales y finales de gas, así como las
          configuraciones almacenadas para cada estación.`,
      `Sinewave-drawer incluye funcionalidades clave como un sistema de
          historial para registrar las operaciones y una herramienta de
          reportería para generar informes detallados sobre las transacciones
          realizadas. Esto permite a los administradores y operadores llevar un
          control preciso y confiable de las operaciones en las estaciones
          envasadoras. Es posiblemente el proyecto más largo que he desarrollado
          desde 0 hasta el día de hoy.`,
    ],
    numberColumn: 2,
    images: ["sinewave1", "sinewave2", "sinewave3"],
    tags: ["next", "csharp", "jwt"],
    primaryColor: "stone",
    textStyle: `text-6xl text-black text-2xl pepe font-bold `,
  },
  barna: {
    titleEN: "Intellectual Production",
    titleES: "Producción Intelectual",
    en: [
      `
          The Intellectual Production Application was developed on behalf of the
          Intellectual Production Department of Barna Management School to organize
          and efficiently manage publications, articles, reports, and other content
          generated by the institution. Since many of the existing applications
          at the school were developed within the Microsoft suite environment, I
          decided to build this application using Power Apps, which facilitated
          integration and leveraged the existing tools.
        `,
      `
          The application allows for easy entry of publications, which can then
          be filtered and sorted according to various criteria, improving
          accessibility and information management. Additionally, it includes
          features to generate charts providing a visual overview of publications
          and their distribution. It also integrates with Power BI, enabling
          users to generate dynamic reports and deeper analyses of the publications,
          facilitating decision-making and monitoring of the institution's
          intellectual production.
        `,
      `
          Although I learned a lot, I must admit that Power Apps is a very
          uncomfortable technology to work with.
        `,
    ],
    es: [
      `
          La Aplicación de Producción Intelectual fue desarrollada por encargo
          del Departamento de Producción Intelectual de Barna Management School
          con el objetivo de organizar y gestionar de manera eficiente las
          publicaciones, artículos, informes y otros contenidos generados por la
          institución. Dado que muchas de las aplicaciones existentes en la
          escuela estaban desarrolladas en el entorno de la suite de Microsoft,
          opté por construir esta aplicación utilizando Power Apps, lo que
          facilitó la integración y aprovechamiento de las herramientas ya
          existentes.
        `,
      `
          La aplicación permite ingresar las publicaciones de manera sencilla y
          luego filtrarlas y ordenarlas según diversos criterios, mejorando la
          accesibilidad y el manejo de la información. Además, incluye
          funcionalidades para generar gráficos que proporcionan una visión
          visual de las publicaciones y su distribución. También cuenta con
          integración con Power BI, lo que permite a los usuarios generar
          reportes dinámicos y análisis más profundos de las publicaciones,
          facilitando la toma de decisiones y el seguimiento de la producción
          intelectual de la institución.
        `,
      `
          A pesar de que aprendí mucho, he de reconocer que Power Apps es una
          tecnología muy incómoda de trabajar.
        `,
    ],
    numberColumn: 2,
    images: ["barna1", "barna2", "barna3", "barna4"],
    tags: ["powerapps"],
    primaryColor: "barnablue",
    textStyle: `text-5xl text-sky-100 tracking-wide text-2xl font-bold `,
  },
  portfolio: {
    titleEN: "Portfolio",
    titleES: "Portfolio",
    en: [
      `
          The system uses an API to manage authentication through
          JWT (JSON Web Tokens) signed with asynchronous cryptographic keys.
          Users log in via a frontend, where credentials are validated by the API
          using a repository that manages user and station data. If the credentials
          are correct, a JWT signed with a private key is generated, containing
          user information, permissions, and an expiration time.
        `,
      `
          Applications consuming the API, such as Sinewave-drawer, verify
          the JWTs using the public key, ensuring the tokens are genuine
          and have not expired. Tokens expire after a set time, and to obtain a
          new one, the user must use a refresh token or authenticate again. The system
          follows the repository pattern to separate data and business logic,
          facilitating maintenance and scalability.
        `,
    ],
    es: [
      `
          El sistema utiliza una API para gestionar la autenticación mediante
          JWT (JSON Web Tokens) firmados con llaves criptográficas asincrónicas.
          Los usuarios inician sesión a través de un frontend, donde las
          credenciales son validadas por la API utilizando un repositorio que
          gestiona los datos de usuarios y estaciones. Si las credenciales son
          correctas, se genera un JWT firmado con una llave privada que contiene
          información del usuario, permisos y un tiempo de expiración.
        `,
      `
          Las aplicaciones que consumen la API, como Sinewave-drawer, verifican
          los JWT usando la llave pública, asegurando que los tokens sean
          genuinos y no hayan expirado. Los tokens vencen después de un tiempo
          establecido y, para obtener uno nuevo, el usuario debe usar un token
          de actualización o autenticarse nuevamente. El sistema sigue el patrón
          repositorio para separar la lógica de datos y negocio, lo que facilita
          su mantenimiento y escalabilidad.
        `,
    ],
    numberColumn: 2,
    images: [],
    tags: ["vite"],
    primaryColor: "teal",
    textStyle: `text-5xl text-white tracking-wide text-2xl pepe `,
  },
  invoice: {
    titleEN: "Handdo.Invoice",
    titleES: "Handdo.Invoice",
    en: [
      `
          Handdo.Invoice is a module within the Handdo system by K3D Technology,
          which allows for automatic invoice generation through an API. The
          module's main functionality involves receiving a request to create an
          invoice, processing it, and returning the generated PDF file. The
          process works as follows: the API receives the request, then uses
          Selenium internally to interact with a web interface to visually display
          the invoice data. Once the invoice is generated, it is "printed" and
          saved as a PDF file, which is returned directly to the requesting system.
        `,
      `
          The decision to use Selenium instead of other document generation methods
          was driven by the need to integrate the module with another system
          requiring this specificity. This approach met the integration requirements
          that would otherwise have complicated the task of automatically generating
          invoices without the visual interaction provided by Selenium.
        `,
    ],
    es: [
      `
          Handdo.Invoice es un módulo dentro del sistema Handdo de K3D
          Technology, que permite generar facturas automáticamente a través de
          una API. La funcionalidad principal del módulo consiste en recibir una
          solicitud para crear una factura, procesarla y devolver el archivo PDF
          generado. El proceso se realiza de la siguiente manera: la API recibe
          la petición, luego utiliza Selenium internamente para interactuar con
          una interfaz web y mostrar los datos de la factura de forma visual.
          Una vez que la factura es generada, se "imprime" y guarda como un
          archivo PDF, el cual es retornado directamente al sistema que hizo la
          solicitud.
        `,
      `
          La decisión de utilizar Selenium en lugar de otros métodos de
          generación de documentos se debió a la necesidad de integrar el módulo
          con otro sistema que requería esta especificidad. Este enfoque
          permitió cumplir con los requerimientos de integración, que de otro
          modo habrían complicado la tarea de generar la factura de forma
          automática sin la interacción visual proporcionada por Selenium.
        `,
    ],
    numberColumn: 2,
    images: ["invoice1"],
    tags: ["csharp"],
    primaryColor: "blue",
    textStyle: `text-4xl text-black text-2xl font-consolas `,
  },
  transporte: {
    titleEN: "Final Career Project",
    titleES: "Proyecto final de carrera",
    en: [
      `
          The ITLA Transportation App was a project developed as part of my
          final career work at the Instituto Tecnológico de las Américas (ITLA).
          This system recreated and modernized the student transportation process
          that existed at the time. Originally, students had to request a ticket,
          physically purchase it, receive a printed version, and then present it
          to board the buses. My application digitized and simplified this entire
          process.
        `,
      `
          The system allowed students to purchase tickets directly from a web
          page and use them via a QR code integrated into their student ID. When
          boarding the bus, the QR code was scanned to verify the ticket's validity,
          eliminating the need for physical documents. Additionally, the app
          provided key information about available routes, stations, and schedules
          to improve the user experience.
        `,
    ],
    es: [
      `
          La App de Transporte ITLA fue un proyecto desarrollado como parte del
          trabajo final de mi carrera en el Instituto Tecnológico de las
          Américas (ITLA). Este sistema recreó y modernizó el proceso de
          transporte estudiantil que existía en ese momento. Originalmente, los
          estudiantes debían solicitar un ticket, ir físicamente a comprarlo,
          recibir una impresión del mismo, y luego presentarlo para abordar los
          autobuses. Mi aplicación digitalizó y simplificó todo este proceso.
        `,
      `
          El sistema permitía a los estudiantes comprar los tickets directamente
          desde una página web y utilizarlos mediante un código QR integrado en
          su carnet estudiantil. Al momento de abordar el autobús, el código QR
          se escaneaba para verificar la validez del ticket, eliminando la
          necesidad de manejar documentos físicos. Además, la app proporcionaba
          información clave sobre las rutas disponibles, estaciones, y horarios
          para mejorar la experiencia del usuario.
        `,
    ],
    numberColumn: 2,
    images: ["transporte1", "transporte2", "transporte3", "transporte4", "transporte5", "transporte6"],
    tags: ["react", "csharp"],
    primaryColor: "barnablue",
    textStyle: `text-4xl text-sky-100 text-2xl font-bold italic `,
  },
};

export const projectsObject = Object.entries(projectsObjectRaw).reduce(
  (acc, [key, value]) => {
    acc[key] = {
      ...value,
      //images: value.images.map(i => (`bg-[url('/src/resources/projects/bifrost/${i}')]`))
    };

    return acc;
  },
  {}
);
