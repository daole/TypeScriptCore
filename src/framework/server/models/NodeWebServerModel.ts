import * as sequelizeModule from "sequelize";
import { Model } from "../../core/models/Model";
import { NodeWebServerApplication } from "../applications/NodeWebServerApplication";

export abstract class NodeWebServerModel<M extends sequelizeModule.Model<I, A>, I extends sequelizeModule.Instance<A>, A> extends Model {
    protected mSequelize: sequelizeModule.Sequelize;
    protected mSequelizeModel: M;

    public constructor(pApplication: NodeWebServerApplication, pSequelize: sequelizeModule.Sequelize) {
        super(pApplication);
        this.mSequelize = pSequelize;
    }

    public getSequelize(): sequelizeModule.Sequelize {
        return this.mSequelize;
    }

    public getSequelizeModel(): M {
        return this.mSequelizeModel;
    }

    public defineSchemaOptions(): sequelizeModule.DefineOptions<I> {
        return <sequelizeModule.DefineOptions<I>> {
            tableName: this.defineTableName(),
            timestamps: true
        };
    }

    public defineRelationships(): void {
    }

    public abstract defineTableName(): string;
    public abstract defineSchema(): sequelizeModule.DefineAttributes;

    public define(): void {
        this.mSequelizeModel = this.mSequelize.define(this.defineTableName(), this.defineSchema(), this.defineSchemaOptions()) as M;
    }
}
