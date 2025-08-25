const pacientes = [
  {
    "id": "pac1",
    "nombre": "Juan López",
    "edad": 45,
    "genero": "masculino",
    "activo": true,
    "fecha_ingreso": "2025-08-15T10:00:00Z",
    "diagnostico": {
      "tipo": "hipertensión",
      "detalles": {
        "sintomas": ["dolor de cabeza", "fatiga"],
        "gravedad": "moderada"
      }
    },
    "direccion": {
      "calle": "Calle Central 123",
      "ciudad": "Managua",
      "pais": "Nicaragua",
      "codigo_postal": "11001",
      "coordenadas": {
        "latitud": 12.114993,
        "longitud": -86.236174
      }
    },
    "familiares": [
      {
        "nombre": "María López",
        "relacion": "esposa",
        "edad": 42
      }
    ],
    "historial_medico": [
      {
        "fecha": "2025-07-20T14:30:00Z",
        "evento": "consulta inicial",
        "detalles": {
          "doctor": "Dr. Ramírez"
        }
      }
    ],
    "ultima_visita": "2025-08-20T15:45:00Z"
  },
  {
    "id": "pac2",
    "nombre": "Ana Martínez",
    "edad": 32,
    "genero": "femenino",
    "activo": false,
    "fecha_ingreso": "2025-06-10T09:15:00Z",
    "diagnostico": {
      "tipo": "diabetes",
      "detalles": {
        "sintomas": ["sed excesiva", "pérdida de peso"],
        "gravedad": {
          "nivel": "alta",
          "complicaciones": ["retinopatía"]
        }
      }
    },
    "direccion": {
      "calle": "Avenida Bolívar 456",
      "ciudad": "León",
      "pais": "Nicaragua",
      "codigo_postal": "21000"
    },
    "familiares": [
      {
        "nombre": "Pedro Martínez",
        "relacion": "esposo",
        "edad": 35,
        "contacto": {
          "telefono": "555-1234"
        }
      },
      {
        "nombre": "Luis Martínez",
        "relacion": "hijo",
        "edad": 10
      }
    ],
    "historial_medico": [],
    "puntuacion_salud": 3.5,
    "ultima_visita": "2025-07-05T11:20:00Z"
  },
  {
    "id": "pac3",
    "nombre": "Carlos Ramírez",
    "edad": 60,
    "genero": "masculino",
    "activo": true,
    "fecha_ingreso": "2025-05-22T13:45:00Z",
    "diagnostico": "asma",
    "direccion": {
      "calle": "Calle Real 789",
      "ciudad": "Granada",
      "pais": "Nicaragua",
      "codigo_postal": "43000",
      "coordenadas": {
        "latitud": 11.929889,
        "longitud": -85.956016,
        "altitud": 50
      }
    },
    "familiares": [],
    "historial_medico": [
      {
        "fecha": "2025-06-01T10:00:00Z",
        "evento": {
          "descripcion": "ataque de asma",
          "tratamiento": {
            "medicamento": "inhalador",
            "dosis": "2 puffs"
          }
        }
      },
      {
        "fecha": "2025-07-15T14:30:00Z",
        "evento": {
          "descripcion": "revisión",
          "tratamiento": {
            "medicamento": "corticoides",
            "dosis": "10mg"
          }
        }
      }
    ],
    "puntuacion_salud": null,
    "ultima_visita": "2025-08-18T16:10:00Z"
  },
  {
    "id": "pac4",
    "nombre": "Sofía Herrera",
    "edad": 28,
    "genero": "femenino",
    "activo": true,
    "fecha_ingreso": "2025-04-18T08:30:00Z",
    "diagnostico": {
      "tipo": {
        "principal": "anemia",
        "secundario": "fatiga crónica"
      },
      "detalles": {
        "sintomas": ["debilidad", "palidez"],
        "gravedad": "baja",
        "analisis": {
          "hemoglobina": 9.5
        }
      }
    },
    "direccion": {
      "calle": "Barrio San Judas 101",
      "ciudad": "Matagalpa",
      "pais": "Nicaragua",
      "codigo_postal": "61000"
    },
    "familiares": [
      {
        "nombre": "Elena Herrera",
        "relacion": "madre",
        "edad": 55
      }
    ],
    "historial_medico": [
      {
        "fecha": "2025-05-10T12:00:00Z",
        "evento": "transfusión",
        "detalles": {
          "cantidad": "1 unidad",
          "tipo_sangre": "O+"
        }
      }
    ],
    "ultima_visita": "2025-08-19T09:45:00Z"
  },
  {
    "id": "pac5",
    "nombre": "Miguel Ortega",
    "edad": 50,
    "genero": "masculino",
    "activo": false,
    "fecha_ingreso": "2025-03-05T11:20:00Z",
    "diagnostico": {
      "tipo": "artritis",
      "detalles": {
        "sintomas": {
          "principales": ["dolor articular", "inflamación"],
          "secundarios": ["rigidez matutina"]
        },
        "gravedad": "moderada",
        "tratamiento": {
          "medicamentos": ["ibuprofeno"],
          "dosis": "400mg"
        }
      }
    },
    "direccion": {
      "calle": "Calle La Libertad 234",
      "ciudad": "Estelí",
      "pais": "Nicaragua",
      "codigo_postal": "31000",
      "coordenadas": {
        "latitud": 13.091394,
        "longitud": -86.353844
      }
    },
    "familiares": [
      {
        "nombre": "Rosa Ortega",
        "relacion": "esposa",
        "edad": 48,
        "contacto": {
          "telefono": "555-5678",
          "email": "rosa@example.com"
        }
      },
      {
        "nombre": "Juan Ortega",
        "relacion": "hijo",
        "edad": 22
      }
    ],
    "historial_medico": [],
    "puntuacion_salud": 4.2,
    "ultima_visita": "2025-06-25T13:30:00Z"
  },
  {
    "id": "pac6",
    "nombre": "Laura Vargas",
    "edad": 22,
    "genero": "femenino",
    "activo": true,
    "fecha_ingreso": "2025-02-14T15:50:00Z",
    "diagnostico": "migraña",
    "direccion": {
      "calle": "Avenida Central 567",
      "ciudad": "Jinotega",
      "pais": "Nicaragua",
      "codigo_postal": "65000"
    },
    "familiares": [],
    "historial_medico": [
      {
        "fecha": "2025-03-01T09:00:00Z",
        "evento": "episodio agudo",
        "detalles": {
          "duracion": "4 horas",
          "intensidad": {
            "nivel": "alta",
            "sintomas": ["náuseas", "fotofobia"]
          }
        }
      }
    ],
    "ultima_visita": "2025-08-17T10:15:00Z"
  },
  {
    "id": "pac7",
    "nombre": "Roberto Castillo",
    "edad": 38,
    "genero": "masculino",
    "activo": true,
    "fecha_ingreso": "2025-01-09T14:10:00Z",
    "diagnostico": {
      "tipo": "gastritis",
      "detalles": {
        "sintomas": ["acidez", "dolor abdominal"],
        "gravedad": {
          "nivel": "media",
          "causas": {
            "principales": ["estrés", "dieta"]
          }
        }
      }
    },
    "direccion": {
      "calle": "Barrio Las Palmas 890",
      "ciudad": "Chinandega",
      "pais": "Nicaragua",
      "codigo_postal": "25000",
      "coordenadas": {
        "latitud": 12.6294,
        "longitud": -87.1311
      }
    },
    "familiares": [
      {
        "nombre": "Teresa Castillo",
        "relacion": "esposa",
        "edad": 36
      }
    ],
    "historial_medico": [
      {
        "fecha": "2025-02-20T11:45:00Z",
        "evento": {
          "descripcion": "endoscopía",
          "resultado": {
            "hallazgos": "inflamación leve",
            "recomendaciones": ["dieta blanda"]
          }
        }
      },
      {
        "fecha": "2025-04-15T13:20:00Z",
        "evento": {
          "descripcion": "seguimiento",
          "resultado": {
            "hallazgos": "mejoría",
            "recomendaciones": ["continuar medicamento"]
          }
        }
      }
    ],
    "puntuacion_salud": null,
    "ultima_visita": "2025-08-16T12:00:00Z"
  },
  {
    "id": "pac8",
    "nombre": "Gabriela Soto",
    "edad": 65,
    "genero": "femenino",
    "activo": false,
    "fecha_ingreso": "2025-07-30T16:40:00Z",
    "diagnostico": {
      "tipo": {
        "principal": "osteoporosis",
        "secundario": {
          "asociado": "fractura de cadera"
        }
      },
      "detalles": {
        "sintomas": ["dolor óseo", "pérdida de altura"],
        "gravedad": "alta"
      }
    },
    "direccion": {
      "calle": "Calle El Triunfo 112",
      "ciudad": "Masaya",
      "pais": "Nicaragua",
      "codigo_postal": "41000"
    },
    "familiares": [
      {
        "nombre": "Antonio Soto",
        "relacion": "hijo",
        "edad": 40,
        "contacto": {
          "telefono": "555-9012"
        }
      }
    ],
    "historial_medico": [
      {
        "fecha": "2025-08-05T08:50:00Z",
        "evento": "cirugía",
        "detalles": {
          "tipo": "reemplazo de cadera",
          "duracion": "2 horas"
        }
      }
    ],
    "ultima_visita": "2025-08-20T14:30:00Z"
  },
  {
    "id": "pac9",
    "nombre": "José Mendoza",
    "edad": 41,
    "genero": "masculino",
    "activo": true,
    "fecha_ingreso": "2025-08-01T12:25:00Z",
    "diagnostico": "hipertiroidismo",
    "direccion": {
      "calle": "Avenida Sandino 345",
      "ciudad": "Rivas",
      "pais": "Nicaragua",
      "codigo_postal": "47000",
      "coordenadas": {
        "latitud": 11.4372,
        "longitud": -85.8263,
        "altitud": {
          "metros": 60
        }
      }
    },
    "familiares": [],
    "historial_medico": [],
    "puntuacion_salud": 4.0,
    "ultima_visita": "2025-08-19T17:00:00Z"
  },
  {
    "id": "pac10",
    "nombre": "Patricia Núñez",
    "edad": 29,
    "genero": "femenino",
    "activo": true,
    "fecha_ingreso": "2025-08-10T10:55:00Z",
    "diagnostico": {
      "tipo": "alergia",
      "detalles": {
        "sintomas": {
          "principales": ["estornudos", "picazón"],
          "secundarios": ["congestión"]
        },
        "alergenos": ["polen", "ácaros"],
        "tratamiento": {
          "medicamentos": {
            "antihistamínicos": "loratadina"
          },
          "dosis": "10mg diario"
        }
      }
    },
    "direccion": {
      "calle": "Barrio Monimbó 678",
      "ciudad": "Bluefields",
      "pais": "Nicaragua",
      "codigo_postal": "81000"
    },
    "familiares": [
      {
        "nombre": "Carlos Núñez",
        "relacion": "hermano",
        "edad": 32
      },
      {
        "nombre": "Ana Núñez",
        "relacion": "madre",
        "edad": 58,
        "contacto": {
          "telefono": "555-3456"
        }
      }
    ],
    "historial_medico": [
      {
        "fecha": "2025-08-12T15:10:00Z",
        "evento": "prueba de alergia",
        "detalles": {
          "resultados": "positivo a polen",
          "notas": {
            "doctor": "Dr. González",
            "recomendaciones": "evitar exposición"
          }
        }
      }
    ],
    "ultima_visita": "2025-08-20T11:40:00Z"
  }
]

const NombrePaciente1 = () => {
  return pacientes[0].nombre
}
console.log("El nombre del primer paciente es: " + NombrePaciente1());

const GravedadDiagnosticoPaciente1 = () => {
  return pacientes[0].diagnostico.detalles.gravedad
}
console.log("La gravedad del primer paciente esta: " + GravedadDiagnosticoPaciente1());

const PrimerSintomaPaciente2 = () => {
  return pacientes[1].diagnostico.detalles.sintomas[0]
}
console.log("El primer sintoma del segundo paciente es: " + PrimerSintomaPaciente2());

const TelefonoPrimerFamiliarPaciente2 = () => {
  return pacientes[1].familiares[0].contacto.telefono
}
console.log("El teléfono del primer familiar del segundo paciente es: " + TelefonoPrimerFamiliarPaciente2());

const AltitudCoordenadasDireccionPaciente3 = () => {
  return pacientes[2].direccion.coordenadas.altitud
}
console.log("La altitud de las coordenadas de la dirección del tercer paciente es: " + AltitudCoordenadasDireccionPaciente3());

const DosisTratamientoEvento1HistorialMedicoPaciente3 = () => {
  return pacientes[2].historial_medico[0].evento.tratamiento.dosis
}
console.log("La dosis del tratamiento del primer historial medico del tercer paciente es de: " + DosisTratamientoEvento1HistorialMedicoPaciente3());

const HemoglobinaPaciente4 = () => {
  return pacientes[3].diagnostico.detalles.analisis.hemoglobina
}
console.log("La hemoglobina del análisis del cuarto paciente es: " + HemoglobinaPaciente4());

const TipoSangreEvento1Paciente4 = () => {
  return pacientes[3].historial_medico[0].detalles.tipo_sangre
}
console.log("El tipo de sangre del cuarto paciente es: " + TipoSangreEvento1Paciente4());

const EmailFamiliar1Paciente5 = () => {
  return pacientes[4].familiares[0].contacto.email
}
console.log("El Email del primer familiar del quinto paciente es: " + EmailFamiliar1Paciente5());

const DosisMedicamentosTratamientoPaciente5 = () => {
  return pacientes[4].diagnostico.detalles.tratamiento.dosis
}
console.log("La Dosis de Medicamentos del tratamiento del quinto paciente es: " + DosisMedicamentosTratamientoPaciente5());

const NombrePaciente6 = () => {
  return pacientes[5].nombre
}
console.log("El nombre del sexto paciente es: " + NombrePaciente6());

const NivelIntensidadDetallesEvento1Paciente6 = () => {
  return pacientes[5].historial_medico[0].detalles.intensidad.nivel
}
console.log("El nivel de intensidad del sexto paciente en los detalles de su primer historial medico esta: " + NivelIntensidadDetallesEvento1Paciente6());

const EdadFamiliar1Paciente7 = () => {
  return pacientes[6].familiares[0].edad
}
console.log("La edad del primer familiar del septimo paciente es de " + EdadFamiliar1Paciente7() + " años");

const RecomendacionesEvento1Paciente7 = () => {
  return pacientes[6].historial_medico[0].evento.resultado.recomendaciones
}
console.log("La recomendación para el septimo paciente es: " + RecomendacionesEvento1Paciente7());

const GravedadPaciente8 = () => {
  return pacientes[7].diagnostico.detalles.gravedad
}
console.log("La gravedad del octavo paciente es: " + GravedadPaciente8());

const TipoCirugiaEvento1Paciente8 = () => {
  return pacientes[7].historial_medico[0].detalles.tipo
}
console.log("El tipo de cirugia del octavo paciente es: " + TipoCirugiaEvento1Paciente8());

const DiagnosticoPaciente9 = () => {
  return pacientes[8].diagnostico
}
console.log("El diagnóstico del noveno paciente es: " + DiagnosticoPaciente9());

const MetrosAltitudCoordenadasDireccionPaciente9 = () => {
  return pacientes[8].direccion.coordenadas.altitud.metros
}
console.log("Los metros de altitud de las coordenadas de la dirección del noveno paciente son " + MetrosAltitudCoordenadasDireccionPaciente9() + "m");

const DosisMedicamentosPaciente10 = () => {
  return pacientes[9].diagnostico.detalles.tratamiento.dosis
}
console.log("La dosis diaria del tratamiento de los medicamentos del decimo paciente es de: " + DosisMedicamentosPaciente10());

const RecomendacionesEvento1Paciente10 = () => {
  return pacientes[9].historial_medico[0].detalles.notas.recomendaciones
}
console.log("La recomendación para el decimo paciente es: " + RecomendacionesEvento1Paciente10());