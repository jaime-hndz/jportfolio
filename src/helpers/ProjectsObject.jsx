export const projectsObject = {
  bifrost: {
    title: "Neo-bifrost",
    text: 
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
      </div>,
    numberColumn: 2,
    images: ["bg-[url('/src/resources/projects/bifrost/neo-bifrost2.gif')]", "bg-[url('/src/resources/projects/bifrost/neo-bifrost1.png')]"],
    tags: ["csharp", "react", "jwt"],
    primaryColor: "gray",
    textStyle: `text-6xl text-slate-700 tracking-widest text-2xl pepe `,
  },
  sinewave: {
    title: "Sinewave Drawer",
    text: 
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
      </div>,
    numberColumn: 2,
    images: ["bifrost2", "bifrost1"],
    tags: ["next", "csharp",  "jwt"],
    primaryColor: "stone",
    textStyle: `text-6xl text-black tracking-wide text-2xl italic `,
  },
  barna: {
    title: "Producción Intelectual",
    text: 
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
      </div>,
    previewImage: "bg-[url('/src/resources/projects/sinewave/sinewave-preview.png')]",
    numberColumn: 2,
    images: ["bifrost2", "bifrost1"],
    tags: ["powerapps"],
    primaryColor: "barnablue",
    textStyle: `text-5xl text-black tracking-wide text-2xl font-bold `,
  },
};
