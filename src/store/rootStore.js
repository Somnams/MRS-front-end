import {observable, computed} from 'mobx';

class RootStore {
    @observable
    userId = 0;

    @computed
    get userIdPlus (){
        return this.userId + 1;
    }
}


export default new RootStore();
