import { UUIDV4 } from 'sequelize'
import { Model, Table, Column, DataType } from 'sequelize-typescript'

@Table({
  tableName: 'branches'
})
export default class Branch extends Model {
  @Column({
    type: DataType.STRING(36),
    primaryKey: true,
    field: 'branchId',
    defaultValue: UUIDV4
  })
  branchId?: string

  @Column({
    type: DataType.STRING(100),
    field: 'name',
    allowNull: false
  })
  name?: string

  @Column({
    type: DataType.FLOAT,
    field: 'longitude',
    allowNull: true
  })
  longitude?: number

  @Column({
    type: DataType.FLOAT,
    field: 'latitude',
    allowNull: true
  })
  latitude?: number

  @Column({
    type: DataType.STRING(255),
    field: 'fullAddress',
    allowNull: true
  })
  fullAddress?: string
}

export interface CreateBranchDTO {
  name: string
  longitude: number
  latitude: number
  fullAddress: string
}

export interface UpdateBranchDTO {
  name: string
  longitude: number
  latitude: number
  fullAddress: string
}
