import Branch, { CreateBranchDTO } from '../models/branch.model'

export const createBranch = async (input: CreateBranchDTO): Promise<Branch> => {
  return await Branch.create({ ...input })
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
