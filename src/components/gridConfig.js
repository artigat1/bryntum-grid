// Configuration for a bryntum grid
import { AjaxStore, DataGenerator, GridRowModel } from 'bryntum-grid'

const showMedium = {
    large: { hidden: true },
    '*': { hidden: false },
}

const hideMedium = {
    large: { hidden: false },
    '*': { hidden: true },
}

const columns = [
    {
        text: 'First name',
        field: 'firstName',
        flex: 1,
        filterable: ({ value, record }) => Boolean(record.name.match(new RegExp(`${value}`, 'i'))),
        responsiveLevels: {
            '*': { width: 120 },
            medium: { width: 100 },
            small: { width: 80 },
        },
    },
    {
        text: 'Surname',
        field: 'surName',
        flex: 1,
        filterable: ({ value, record }) => Boolean(record.surName.match(new RegExp(`${value}`, 'i'))),
        responsiveLevels: {
            '*': { width: 120 },
            medium: { width: 100 },
            small: { width: 80 },
        },
    },
    {
        text: 'Team',
        field: 'team',
        flex: 1,
        filterable: ({ value, record }) => Boolean(record.team.match(new RegExp(`${value}`, 'i'))),
        responsiveLevels: showMedium,
    },
    {
        text: 'Favorite color',
        field: 'color',
        flex: 1,
        filterable: ({ value, record }) => Boolean(record.color.match(new RegExp(`${value}`, 'i'))),
        responsiveLevels: hideMedium,
    },
    {
        text: 'Age',
        field: 'age',
        flex: 1,
        type: 'number',
        filterable: false,
        responsiveLevels: hideMedium,
    },
    {
        text: 'Start',
        field: 'start',
        type: 'date',
        flex: 1,
        filterable: false,
    },

]

const onStoreException = (event) => {
    const { action, json } = event
    const serverMessage = json && json.msg
    const exceptionText = `Command "${action}" failed.${serverMessage ? ` Server response: ${serverMessage}` : ''}`

    // Toast.show({
    //     html: exceptionText,
    //     color: 'b-red',
    //     style: 'color:white',
    //     timeout: 3000,
    // })

    if (!serverMessage) {
        console.error(`App Exception: ${exceptionText}`, event)
    }
}

const store = new AjaxStore({
    modelClass: GridRowModel,
    readUrl: 'https://swapi.dev/api/people',
    pageParamName: 'page',
    pageSize: 10,
    autoLoad: true,
    listeners: {
        exception: onStoreException,
    },
})

export default {

    adopt: 'container',
    minHeight: '20em',

    selectionMode: {
        row: true,
    },

    filterColumns: true,
    columnLines: true,
    columnPicker: true,
    dragColumns: true,
    columns: columns,
    data: DataGenerator.generateData(50),
    store,
} // eo gridConfig

// eof
