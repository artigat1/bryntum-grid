// Configuration for a bryntum grid
import { DataGenerator } from 'bryntum-grid'

const columns = [
  {
    text: 'First name',
    field: 'firstName',
    flex: 1,
  },
  {
    text: 'Surname',
    field: 'surName',
    flex: 1,
  },
  {
    text: 'Team',
    field: 'team',
    flex: 1,
  },
  {
    text: 'Favorite color',
    field: 'color',
    flex: 1,
  },
  {
    text: 'Age',
    field: 'age',
    flex: 1,
    type: 'number',
  },
  {
    text: 'Start',
    field: 'start',
    type: 'date',
    flex: 1,
  },
]

export default {
  adopt: 'container',
  minHeight: '20em',

  selectionMode: {
    row: true,
  },

  columnLines: false,
  columns: columns,
  data: DataGenerator.generateData(50),
} // eo gridConfig

// eof
