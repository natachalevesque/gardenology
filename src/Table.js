import './Table.css'
import PlantRow from './PlantRow.js';
import NewRow from './NewRow.js';


function Table({ data, searchText }) {
    const rows = [];

    data.forEach((row) => {
        console.log(row.name)
        if (
            row.name.toLowerCase().indexOf(
                searchText.toLowerCase()
            ) === -1
        ) {
            return;
        }
        rows.push(
            <PlantRow
                row={row}
                key={row.name}/>
        );
    });
    rows.push(
        <NewRow
            key={0}
        />
        );

    return (
        <div className={"Table"}>
            <div>
                <div className={"TableHeader"}>
                    <h4>Name</h4>
                    <h4>Earliest Date</h4>
                    <h4>Latest Date</h4>
                </div>
            </div>
            <div>{rows}</div>
        </div>
    )
}

export default Table;