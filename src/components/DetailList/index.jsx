import * as React from 'react';
import {Modal} from 'antd';
import SongTable from '../SongTable';
import './index.scss';

function DetailList(props) {
    return (
        <Modal
            className={'detail-modal'}
            title='Details'
            visible={props.visible}
            footer={null}
            onCancel={props.changeVisible.bind(this)}
        >
            <SongTable index={props.index} className={'detail-modal-table'} data={props.data} scroll={200} />
        </Modal>
    );
}

export default DetailList;
