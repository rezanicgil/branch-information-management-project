import { UUIDV4 } from 'sequelize'
import { Model, Table, Column, DataType } from 'sequelize-typescript'
export enum UserRole {
  OWNER = 'Owner',
  EMPLOYEEE = 'Employee'
}

@Table({
  tableName: 'users'
})
export default class User extends Model {
  @Column({
    type: DataType.STRING(36),
    primaryKey: true,
    field: 'userId',
    defaultValue: UUIDV4
  })
  userId?: string

  @Column({
    type: DataType.STRING(100),
    field: 'firstName',
    allowNull: false
  })
  firstName?: string

  @Column({
    type: DataType.STRING(100),
    field: 'lastName',
    allowNull: false
  })
  lastName?: string

  @Column({
    type: DataType.ENUM(...Object.values(UserRole)),
    field: 'role',
    allowNull: false
  })
  role?: UserRole

  @Column({
    type: DataType.STRING,
    field: 'email',
    validate: {
      isEmail: true
    },
    allowNull: false,
    unique: true
  })
  email?: string

  @Column({
    type: DataType.STRING,
    field: 'password',
    allowNull: false
  })
  password?: string
}

export interface CreateUserDTO {
  firstName: string
  lastName: string
  email: string
  password: string
  role: UserRole
}
