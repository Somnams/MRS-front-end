import * as React from 'react';
import SongTable from '../../components/SongTable';

import './index.scss';

function Search(props) {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        const d = props.location.data;
        !d && props.history.push('/welcome');
        d && setData(JSON.parse(d));
    }, [props.location.data]);

    return (
        <div className={'page result'}>
            <p className={'description-text'}>Search-Result</p>
            <div className={'result-table'}>
                <SongTable data={data} scroll={500} />
            </div>
        </div>
    );
}

export default Search;
