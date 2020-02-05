export class DataSet<T> {

    public Data: T[] = [];
    public Current: T;
    public xCurrent: T;

    public mode: string;

    constructor() {
        this.mode='brow';

    }

    toSelect(cur: T): void {
        if (this.mode == 'brow' || this.mode == 'selec') {
            this.Current = cur;
            this.xCurrent = this.Current;
            this.mode = 'selec';
        }
    }

    initData(idx: number = 0, mod: string = 'brow') {
        this.mode = 'brow';
        if ((this.Data.length > 0)&&(idx>=0)) {
            this.Current = this.Data[idx];
            this.xCurrent = this.Current;
            this.mode = 'selec';
        } else {
            this.Current = undefined;
            this.xCurrent = undefined;
        }
    }

    toInit(tomode: string = 'brow') {
        if (this.Data.length > 0) {
        }
    }

    toEdit() {
        if (this.mode == 'selec') {
            this.xCurrent = this.cloneObject(this.Current);
            this.mode = 'edit';
        }
    }

    toNew(newCur: T) {
        console.log('this.mode', this.mode);
        if (this.mode == 'brow' || this.mode == 'selec') {
            this.xCurrent = newCur
            this.mode = 'add';
        }
    }

    toCancel() {
        if (this.mode == 'edit') {
            this.xCurrent = this.Current;
            this.mode = 'selec';
        } else {
            if (this.mode == 'add') {
                this.initData();
            }
        }
    }

    toSave(resp: T) {
        if (this.mode == 'edit') {
            console.log('esto recibo en dataset edit edit:', resp);
            let inde = this.Data.findIndex(s => s['_id'] == resp['_id']);
            let ix = this.Data.splice(inde, 1, resp);
            this.Current = this.Data[inde];

            this.xCurrent = this.Current;
            this.mode = 'selec';
        } else {
            if (this.mode == 'add') {
                this.Data.push(resp);
                this.Current = this.Data[this.Data.length - 1];
                this.xCurrent = this.Current;
                this.mode = 'selec';
            }
        }
    }

    cloneObject(origi: T): T {
        const jsonString = JSON.stringify(origi);
        const clonedObject = JSON.parse(jsonString);
        return clonedObject;
    }

    toNestSave(resp: T, DataNest: T[])
    {
      if(this.mode=='edit')
      {
        let inde = DataNest.findIndex(s => s['_id'] == resp['_id']);
        let ix = DataNest.splice(inde, 1, resp);
        this.Current = DataNest[inde];
        this.xCurrent=this.Current;
        this.mode='selec';
      }
      else
      {
        if(this.mode == 'add')
        {
          DataNest.push(resp);
          this.Current = DataNest[DataNest.length - 1];
          this.xCurrent = this.Current;
          this.mode = 'selec';
        }
      }
    }


    toFakeSave(resp: T, fielname:string='index') 
    {
        if (this.mode == 'edit') {            
            let inde = this.Data.findIndex(s => s[fielname] == resp[fielname]);
            let ix = this.Data.splice(inde, 1, resp);
            this.Current = this.Data[inde];

            this.xCurrent = this.Current;
            this.mode = 'selec';
        } else {
            if (this.mode == 'add') {
                this.Data.push(resp);
                this.Current = this.Data[this.Data.length - 1];
                this.xCurrent = this.Current;
                this.mode = 'selec';
            }
        }
    }

    toNewOrEditFake(modx:string='selec')
    {
        this.mode=modx;
    }

    toSetCurrent(ncur:T){
        this.Data.push(ncur);
    }
}
