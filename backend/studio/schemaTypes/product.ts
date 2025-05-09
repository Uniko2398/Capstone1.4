import { defineType, defineField } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'item',
      title: 'Sotto-categoria',
      type: 'string'
      
    }),
    defineField({
        name: "image",
        title: "Immagine",
        type: "image",
        options: { hotspot: true },

    }),
    defineField({
        name: "price",
      title: "Prezzo",
      type: "number",
      }),
    defineField({
        name: "oldPrice",
        title: "Prezzo Vecchio",
        type: "number",
    }),
    defineField({
        name: "rating",
        title: "Valutazione",
        type: "number",
    }),
    defineField({
        name: "badges",
        title: "Badge",
        type: "array",
        of: [{ type: "string" }],
    }),
    defineField({
        name: "category",
      title: "Categoria",
      type: "string",
      options: {
        list: [
          { title: "Telefonia", value: "Telefonia" },
          { title: "Computer", value: "Computer" },
          { title: "Periferiche PC e Ufficio", value: "Periferiche PC e Ufficio" },
          { title: "TV e Home Cinema", value: "TV e Home Cinema" },
          { title: "Grandi Elettrodomestici", value: "Grandi Elettrodomestici" },
          { title: "Piccoli Elettrodomestici", value: "Piccoli Elettrodomestici" },
          { title: "Mobilità Elettrica", value: "Mobilità Elettrica" },
          { title: "Console e Videogiochi", value: "Console e Videogiochi" },
        ],
    }
}),
    
    defineField({
        name: "specsTelefonia",
        title: "Specifiche Telefonia",
        type: "object",
        fields: [
          { name: "Schermo", type: "string" },
          { name: "Memoria", type: "string" },
          { name: "OS", type: "string" },
          { name: "Processore", type: "string" },
        ],
        hidden: ({ parent }: any) => parent?.category !== "Telefonia", }),
        
        
        defineField({
            name: "specsComputer",
            title: "Specifiche Computer",
            type: "object",
            fields: [
              { name: "Processore", type: "string" },
              { name: "RAM", type: "string" },
              { name: "Memoria", type: "string" },
              { name: "SchedaVideo", type: "string" },
            ],
            hidden: ({ parent }: any) => parent?.category !== "Computer",
    }),
    defineField({
        name: "specsPeriferiche",
        title: "Specifiche Periferiche",
        type: "object",
        fields: [
          { name: "Tipo", type: "string" },
          { name: "Compatibilita", type: "string" },
          { name: "Connettivita", type: "string" },
        ],
        hidden: ({ parent }: any) => parent?.category !== "Periferiche PC e Ufficio",
    }),
    defineField({
        name: "specsTV",
        title: "Specifiche TV",
        type: "object",
        fields: [
            { name: "Tipo", type: "string" },
            { name: "Marca", type: "string" },
            { name: "Grandezza", type: "string" },
          ],
          hidden: ({ parent }: any) => parent?.category !== "TV e Home Cinema",
       }),
    defineField({
        name: "specsGrandiElettrodomestici",
        title: "Specifiche Grandi Elettrodomestici",
        type: "object",
        fields: [
          { name: "ClasseEnergetica", type: "string" },
          { name: "Capacita", type: "string" },
          { name: "Dimensioni", type: "string" },
        ],
        hidden: ({ parent }: any) => parent?.category !== "Grandi Elettrodomestici",
    }),
    defineField({ name: "specsPiccoliElettrodomestici",
        title: "Specifiche Piccoli Elettrodomestici",
        type: "object",
        fields: [
          { name: "Funzioni", type: "string" },
          { name: "Potenza", type: "string" },
          { name: "Accessori", type: "string" },
        ],
        hidden: ({ parent }: any) => parent?.category !== "Piccoli Elettrodomestici",
    }),
    defineField({ name: "specsMobilita",
        title: "Specifiche Mobilità Elettrica",
        type: "object",
        fields: [
          { name: "Autonomia", type: "string" },
          { name: "VelocitaMassima", type: "string" },
          { name: "Batteria", type: "string" },
        ],
        hidden: ({ parent }: any) => parent?.category !== "Mobilità Elettrica",
       }),
    defineField({
        name: "specsConsole",
        title: "Specifiche Console e Videogiochi",
        type: "object",
        fields: [
          { name: "Memoria", type: "string" },
          { name: "Processore", type: "string" },
          { name: "SchedaVideo", type: "string" },
        ],
        hidden: ({ parent }: any) => parent?.category !== "Console e Videogiochi",
    }),      
  ]
})