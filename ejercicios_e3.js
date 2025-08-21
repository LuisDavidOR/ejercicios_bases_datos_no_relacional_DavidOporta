const usuarios = [
  {
    "id": "doc1",
    "nombre": "Juan Pérez",
    "edad": 28,
    "activo": true,
    "saldo": 150.75,
    "direccion": {
      "calle": "Avenida Principal 456",
      "ciudad": "Madrid",
      "pais": "España",
      "codigoPostal": "28001",
      "coordenadas": {
        "latitud": 40.4168,
        "longitud": -3.7038
      }
    },
    "intereses": ["deportes", "lectura", "viajes"],
    "amigos": [
      {
        "nombre": "Ana García",
        "edad": 26,
        "relacion": "mejor amiga"
      },
      {
        "nombre": "Carlos López",
        "edad": 29,
        "relacion": "compañero de trabajo"
      }
    ],
    "historialCompras": [
      {
        "producto": "Libro de programación",
        "precio": 25.99,
        "fecha": "2025-01-15T14:30:00Z",
        "detalles": {
          "cantidad": 1,
          "envio": true
        }
      },
      {
        "producto": "Auriculares inalámbricos",
        "precio": 89.50,
        "fecha": "2025-03-22T09:45:00Z",
        "detalles": {
          "cantidad": 2,
          "envio": false
        }
      }
    ],
    "puntuacion": null,
    "ultimoAcceso": "2025-08-20T13:16:00Z"
  },
  {
    "id": "doc2",
    "nombre": "María Rodríguez",
    "edad": 35,
    "activo": false,
    "saldo": 320.00,
    "direccion": {
      "calle": "Calle Secundaria 789",
      "ciudad": "Barcelona",
      "pais": "España",
      "codigoPostal": "08001",
      "coordenadas": {
        "latitud": 41.3851,
        "longitud": 2.1734
      }
    },
    "intereses": ["cocina", "música", "arte"],
    "amigos": [
      {
        "nombre": "Luis Martínez",
        "edad": 34,
        "relacion": "esposo"
      },
      {
        "nombre": "Sofía Hernández",
        "edad": 32,
        "relacion": "hermana"
      },
      {
        "nombre": "Pedro Sánchez",
        "edad": 36,
        "relacion": "amigo de la infancia"
      }
    ],
    "historialCompras": [
      {
        "producto": "Pinturas acrílicas",
        "precio": 45.20,
        "fecha": "2025-02-10T11:20:00Z",
        "detalles": {
          "cantidad": 3,
          "envio": true
        }
      }
    ],
    "puntuacion": 4.5,
    "ultimoAcceso": "2025-07-15T18:45:00Z"
  },
  {
    "id": "doc3",
    "nombre": "Alberto Gómez",
    "edad": 42,
    "activo": true,
    "saldo": -50.25,
    "direccion": {
      "calle": "Plaza Mayor 123",
      "ciudad": "Valencia",
      "pais": "España",
      "codigoPostal": "46001",
      "coordenadas": {
        "latitud": 39.4699,
        "longitud": -0.3763
      }
    },
    "intereses": ["tecnología", "cine", "fotografía"],
    "amigos": [],
    "historialCompras": [
      {
        "producto": "Cámara DSLR",
        "precio": 599.99,
        "fecha": "2025-04-05T16:10:00Z",
        "detalles": {
          "cantidad": 1,
          "envio": true
        }
      },
      {
        "producto": "Trípode",
        "precio": 79.99,
        "fecha": "2025-04-12T10:55:00Z",
        "detalles": {
          "cantidad": 1,
          "envio": false
        }
      },
      {
        "producto": "Lentes adicionales",
        "precio": 199.00,
        "fecha": "2025-05-01T14:00:00Z",
        "detalles": {
          "cantidad": 2,
          "envio": true
        }
      }
    ],
    "puntuacion": 3.8,
    "ultimoAcceso": "2025-08-19T22:30:00Z"
  },
  {
    "id": "doc4",
    "nombre": "Elena Fernández",
    "edad": 19,
    "activo": true,
    "saldo": 0.00,
    "direccion": {
      "calle": "Calle Universitaria 567",
      "ciudad": "Sevilla",
      "pais": "España",
      "codigoPostal": "41001",
      "coordenadas": {
        "latitud": 37.3891,
        "longitud": -5.9845
      }
    },
    "intereses": ["estudios", "deportes extremos", "videojuegos"],
    "amigos": [
      {
        "nombre": "Raúl Díaz",
        "edad": 20,
        "relacion": "compañero de clase"
      }
    ],
    "historialCompras": [],
    "puntuacion": null,
    "ultimoAcceso": "2025-08-20T08:15:00Z"
  },
  {
    "id": "doc5",
    "nombre": "Francisco Ruiz",
    "edad": 55,
    "activo": false,
    "saldo": 1000.50,
    "direccion": {
      "calle": "Avenida Retiro 890",
      "ciudad": "Bilbao",
      "pais": "España",
      "codigoPostal": "48001",
      "coordenadas": {
        "latitud": 43.2630,
        "longitud": -2.9350
      }
    },
    "intereses": ["jardinería", "lectura histórica", "viajes culturales"],
    "amigos": [
      {
        "nombre": "Isabel Moreno",
        "edad": 53,
        "relacion": "esposa"
      },
      {
        "nombre": "Javier Navarro",
        "edad": 56,
        "relacion": "amigo de trabajo"
      },
      {
        "nombre": "Carmen Ortega",
        "edad": 54,
        "relacion": "vecina"
      },
      {
        "nombre": "Miguel Pérez",
        "edad": 57,
        "relacion": "compañero de club"
      }
    ],
    "historialCompras": [
      {
        "producto": "Libro de historia antigua",
        "precio": 35.00,
        "fecha": "2025-06-18T13:40:00Z",
        "detalles": {
          "cantidad": 1,
          "envio": false
        }
      },
      {
        "producto": "Herramientas de jardinería",
        "precio": 120.75,
        "fecha": "2025-07-02T15:25:00Z",
        "detalles": {
          "cantidad": 1,
          "envio": true
        }
      }
    ],
    "puntuacion": 4.9,
    "ultimoAcceso": "2025-06-30T19:50:00Z"
  }
]

const mostrarNombreUsuario1 = () => {
  return usuarios[0].nombre
}
console.log("El nombre del primer usuario es: " + mostrarNombreUsuario1());

const mostrarCiudadUsuario2= () => {
  return usuarios[1].direccion.ciudad
}
console.log("La ciudad del usuario 2 es: " + mostrarCiudadUsuario2());

const mostrarInteres1Usuario3 = () => {
  return usuarios[2].intereses[0]
}
console.log("El primer interes del usuario 3 es: " + mostrarInteres1Usuario3());


const mostrarNombreAmigo2Usuario5 = () => {
  return usuarios[4].amigos[1].nombre
}
console.log("El nombre del segundo amigo del usuario 5 es: " + mostrarNombreAmigo2Usuario5());


const mostrarPrecioProducto1Usuario1 = () => {
  return usuarios[0].historialCompras[0].precio
}
console.log("El precio del primer producto de compra del usuario 1 es: " + mostrarPrecioProducto1Usuario1());


const mostrarLatitudCUsuario4 = () => {
  return usuarios[3].direccion.coordenadas.latitud
}
console.log("La latitud de coordenadas de la dirección del usuario 4 es: " + mostrarLatitudCUsuario4());

const mostrarPuntuacionUsuario2 = () => {
  return usuarios[1].puntuacion
}
console.log("La puntuación del usuario 2 es: " + mostrarPuntuacionUsuario2());


const mostrarFecha2ComprasUsuario3 = () => {
  return usuarios[2].historialCompras[1].fecha
}
console.log("La fecha de compra del segundo elemento del usuario 3 es: " + mostrarFecha2ComprasUsuario3());

const mostrarEnvioCompra1Usuario5 = () => {
  return usuarios[4].historialCompras[0].detalles.envio
}
console.log("El valor de envio de la primera compra del usuario 5 es: " + mostrarEnvioCompra1Usuario5());

const mostrarSaldoUsuario4 = () => {
  return usuarios[3].saldo
}
console.log("El Saldo del Usuario 4 es: " + mostrarSaldoUsuario4());