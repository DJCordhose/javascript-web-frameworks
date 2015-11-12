import React from 'react';

export default class ReactFixedColumnTable extends React.Component {
    componentDidMount() {
        this.sync(this.refs.column, this.refs.rest);
    }

    shouldComponentUpdate() {
        return false;
    }

    sync(fixedTable, mainTable) {
        fixedTable.addEventListener('scroll', (e) => {
            const scrollPosition = fixedTable.scrollTop;
            mainTable.scrollTop = scrollPosition;
        });
        mainTable.addEventListener('scroll', (e) => {
            const scrollPosition = mainTable.scrollTop;
            fixedTable.scrollTop = scrollPosition;
        });
    }

    render() {
        const {titles, rows} = this.props;

        console.log(titles);
        const titleInHead = titles[0];
        const titlesInBody = titles.slice(1);
        const firstColumn = [];
        for (const row of rows) {
            const first = row.splice(0, 1);
            firstColumn.push(first);
        }

        return <div>
            <table className="fixed-column" ref="column">
                <thead>
                <tr>
                    <th>{titleInHead}</th>
                </tr>
                </thead>
                <tbody>
                {firstColumn.map((column, index) => <tr key={index}>
                    <td>{column}</td>
                </tr>)}
                </tbody>
            </table>
            <table className="fixed-body" ref="rest">
                <thead>
                <tr>
                    {titlesInBody.map((title, index) => <th key={index}>{title}</th>) }
                </tr>
                </thead>
                <tbody>
                {rows.map((row, index) => <tr key={index}>
                    {row.map((data, index) => <td key={index}>{data}</td>)}
                </tr>)}
                </tbody>
            </table>
        </div>;
    }
}
