const projectsObjectRaw = {
  bifrost: {
    title: "Neo-bifrost",
    text: (
      <div>
        <p>
          El sistema utiliza una API para gestionar la autenticación mediante
          JWT (JSON Web Tokens) firmados con llaves criptográficas asincrónicas.
          Los usuarios inician sesión a través de un frontend, donde las
          credenciales son validadas por la API utilizando un repositorio que
          gestiona los datos de usuarios y estaciones. Si las credenciales son
          correctas, se genera un JWT firmado con una llave privada que contiene
          información del usuario, permisos y un tiempo de expiración.
        </p>
        <p>
          Las aplicaciones que consumen la API, como Sinewave-drawer, verifican
          los JWT usando la llave pública, asegurando que los tokens sean
          genuinos y no hayan expirado. Los tokens vencen después de un tiempo
          establecido y, para obtener uno nuevo, el usuario debe usar un token
          de actualización o autenticarse nuevamente. El sistema sigue el patrón
          repositorio para separar la lógica de datos y negocio, lo que facilita
          su mantenimiento y escalabilidad.
        </p>
      </div>
    ),
    numberColumn: 2,
    images: [
      "bifrost2",
      "bifrost1",
    ],
    tags: ["csharp", "react", "jwt"],
    primaryColor: "gray",
    textStyle: `text-6xl text-slate-700 tracking-widest text-2xl pepe `,
  },
  sinewave: {
    title: "Sinewave Drawer",
    text: (
      <div>
        <p>
          Sinewave-drawer es un sistema diseñado para gestionar los cierres de
          inventario en las estaciones envasadoras de gas del grupo Marti,
          propietarios de Tropigas. El sistema realiza un seguimiento detallado
          de los galones de gas dispensados, los productos vendidos, y los
          depósitos de efectivo o recepciones de gas. El proceso se maneja a
          través de un flujo paso a paso que asegura la precisión y trazabilidad
          de las operaciones en cada estación.
        </p>
        <p>
          En el frontend, se almacenan los datos relacionados con las ventas y
          el inventario, que luego se sincronizan con la API para ser
          almacenados y procesados. Esta API, a su vez, se comunica con la API
          de neo-bifrost para validar los JWT (JSON Web Tokens) y asegurar que
          las interacciones sean seguras y legítimas. El sistema también
          gestiona los inventarios iniciales y finales de gas, así como las
          configuraciones almacenadas para cada estación.
        </p>
        <p>
          Sinewave-drawer incluye funcionalidades clave como un sistema de
          historial para registrar las operaciones y una herramienta de
          reportería para generar informes detallados sobre las transacciones
          realizadas. Esto permite a los administradores y operadores llevar un
          control preciso y confiable de las operaciones en las estaciones
          envasadoras. Es posiblemente el proyecto mas largo que he desarrollado
          desde 0 hasta el día de hoy.
        </p>
      </div>
    ),
    numberColumn: 2,
    images: [],
    tags: ["next", "csharp", "jwt"],
    primaryColor: "stone",
    textStyle: `text-6xl text-black tracking-wide text-2xl italic `,
  },
  barna: {
    title: "Producción Intelectual",
    text: (
      <div>
        <p>
          La Aplicación de Producción Intelectual fue desarrollada por encargo
          del Departamento de Producción Intelectual de Barna Management School
          con el objetivo de organizar y gestionar de manera eficiente las
          publicaciones, artículos, informes y otros contenidos generados por la
          institución. Dado que muchas de las aplicaciones existentes en la
          escuela estaban desarrolladas en el entorno de la suite de Microsoft,
          opté por construir esta aplicación utilizando Power Apps, lo que
          facilitó la integración y aprovechamiento de las herramientas ya
          existentes.
        </p>
        <p>
          La aplicación permite ingresar las publicaciones de manera sencilla y
          luego filtrarlas y ordenarlas según diversos criterios, mejorando la
          accesibilidad y el manejo de la información. Además, incluye
          funcionalidades para generar gráficos que proporcionan una visión
          visual de las publicaciones y su distribución. También cuenta con
          integración con Power BI, lo que permite a los usuarios generar
          reportes dinámicos y análisis más profundos de las publicaciones,
          facilitando la toma de decisiones y el seguimiento de la producción
          intelectual de la institución.
        </p>
        <p>
          A pesar de que aprendí mucho, he de reconocer que power apps es una
          tecnología muy incomoda de trabajar.
        </p>
      </div>
    ),
    numberColumn: 2,
    images: [],
    tags: ["powerapps"],
    primaryColor: "barnablue",
    textStyle: `text-5xl text-white tracking-wide text-2xl font-bold `,
  },
  portfolio: {
    title: "Jportfolio",
    text: (
      <div>
        <p>
          El sistema utiliza una API para gestionar la autenticación mediante
          JWT (JSON Web Tokens) firmados con llaves criptográficas asincrónicas.
          Los usuarios inician sesión a través de un frontend, donde las
          credenciales son validadas por la API utilizando un repositorio que
          gestiona los datos de usuarios y estaciones. Si las credenciales son
          correctas, se genera un JWT firmado con una llave privada que contiene
          información del usuario, permisos y un tiempo de expiración.
        </p>
        <p>
          Las aplicaciones que consumen la API, como Sinewave-drawer, verifican
          los JWT usando la llave pública, asegurando que los tokens sean
          genuinos y no hayan expirado. Los tokens vencen después de un tiempo
          establecido y, para obtener uno nuevo, el usuario debe usar un token
          de actualización o autenticarse nuevamente. El sistema sigue el patrón
          repositorio para separar la lógica de datos y negocio, lo que facilita
          su mantenimiento y escalabilidad.
        </p>
      </div>
    ),
    previewImage: "",
    numberColumn: 2,
    images: [],
    tags: ["vite"],
    primaryColor: "teal",
    textStyle: `text-5xl text-white tracking-wide text-2xl font-consolas `,
  },
  invoice: {
    title: "Handdo.Invoice",
    text: (
      <div>
        <p>
          Handdo.Invoice es un módulo dentro del sistema Handdo de K3D
          Technology, que permite generar facturas automáticamente a través de
          una API. La funcionalidad principal del módulo consiste en recibir una
          solicitud para crear una factura, procesarla y devolver el archivo PDF
          generado. El proceso se realiza de la siguiente manera: la API recibe
          la petición, luego utiliza Selenium internamente para interactuar con
          una interfaz web y mostrar los datos de la factura de forma visual.
          Una vez que la factura es generada, se &quot;imprime&quot; y guarda como un
          archivo PDF, el cual es retornado directamente al sistema que hizo la
          solicitud.
        </p>
        <p>
          La decisión de utilizar Selenium en lugar de otros métodos de
          generación de documentos se debió a la necesidad de integrar el módulo
          con otro sistema que requería esta especificidad. Este enfoque
          permitió cumplir con los requerimientos de integración, que de otro
          modo habrían complicado la tarea de generar la factura de forma
          automática sin la interacción visual proporcionada por Selenium.
        </p>
      </div>
    ),
    previewImage: "",
    numberColumn: 2,
    images: [],
    tags: ["csharp"],
    primaryColor: "blue",
    textStyle: `text-4xl text-black text-2xl pepe  `,
  },
  transporte: {
    title: "Trabajo final de carrera",
    text: (
      <div>
        <p>
          La App de Transporte ITLA fue un proyecto desarrollado como parte del
          trabajo final de mi carrera en el Instituto Tecnológico de las
          Américas (ITLA). Este sistema recreó y modernizó el proceso de
          transporte estudiantil que existía en ese momento. Originalmente, los
          estudiantes debían solicitar un ticket, ir físicamente a comprarlo,
          recibir una impresión del mismo, y luego presentarlo para abordar los
          autobuses. Mi aplicación digitalizó y simplificó todo este proceso.
        </p>
        <p>
          El sistema permitía a los estudiantes comprar los tickets directamente
          desde una página web y utilizarlos mediante un código QR integrado en
          su carnet estudiantil. Al momento de abordar el autobús, el código QR
          se escaneaba para verificar la validez del ticket, eliminando la
          necesidad de manejar documentos físicos. Además, la app proporcionaba
          información clave sobre las rutas disponibles, estaciones, y horarios
          para mejorar la experiencia del usuario.
        </p>
      </div>
    ),
    previewImage: "",
    numberColumn: 2,
    images: [],
    tags: ["react", "csharp"],
    primaryColor: "barnablue",
    textStyle: `text-4xl text-white text-2xl pepe font-bold `,
  },
};

export const projectsObject = Object.entries(projectsObjectRaw).reduce((acc, [key, value]) => {
  acc[key] = {
    ...value, 
    //images: value.images.map(i => (`bg-[url('/src/resources/projects/bifrost/${i}')]`))
  };

  return acc;
}, {});
