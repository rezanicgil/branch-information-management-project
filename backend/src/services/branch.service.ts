import Branch, { CreateBranchDTO, UpdateBranchDTO } from '../models/branch.model'

export const createBranch = async (input: CreateBranchDTO): Promise<Branch> => {
  return await Branch.create({ ...input })
}

export const updateBranch = async (id: string, input: UpdateBranchDTO): Promise<Branch | null> => {
  const [affectedCount] = await Branch.update({ ...input }, { where: { branchId: id } })
  console.log(affectedCount)
  if (affectedCount === 0) {
    return null
  }
  const updatedBranch = await Branch.findByPk(id)
  return updatedBranch
}

export const findOneBranch = async (id: string): Promise<Branch | null> => {
  const branch = await Branch.findOne({ where: { branchId: id } })
  if (!branch) {
    return null
  }
  return branch
}

export const findAllBranches = async (): Promise<Branch[] | null> => {
  const branches = await Branch.findAll({})
  if (!branches) {
    return null
  }
  return branches
}
