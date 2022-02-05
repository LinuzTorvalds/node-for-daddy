import { Request, Response, Router } from 'express'

//users
import SignUpUserControl from './controllers/users/SignUp'
import SignInUserControl from './controllers/users/SignIn'
import UpdateUserControl from './controllers/users/Update'

//materials
import CreateMaterialControl from './controllers/material/Create'
import DeleteMaterialControl from './controllers/material/Delete'
import UpdateMaterialControl from './controllers/material/Update'
import ListMaterialControl from './controllers/material/List'
import ReadMaterialControl from './controllers/material/Read'

//reports
import CreateReportControl from './controllers/report/Create'
import UpdateReportControl from './controllers/report/Update'

//users
const signUpUserControl = new SignUpUserControl()
const signInUserControl = new SignInUserControl()
const updateUserControl = new UpdateUserControl()

//materials
const createMaterialControl = new CreateMaterialControl()
const deleteMaterialControl = new DeleteMaterialControl()
const updateMaterialControl = new UpdateMaterialControl()
const listMaterialControl = new ListMaterialControl()
const readMaterialControl = new ReadMaterialControl()

//reports
const createReportControl = new CreateReportControl()
const updateReportControl = new UpdateReportControl()

const router = Router()

//home
router.get('/', (request: Request, response: Response) => {
  response.send('Ready :) ^-^')
})

//users
router.post('/users/signup', signUpUserControl.handle)
router.post('/users/signin', signInUserControl.handle)
router.put('/users/update/:Code', updateUserControl.handle)

//materials
router.post('/materials/create', createMaterialControl.handle)
router.delete('/materials/delete/:Lote', deleteMaterialControl.handle)
router.put('/materials/update/:Lote', updateMaterialControl.handle)
router.get('/materials/list', listMaterialControl.handle)
router.get('/materials/read/:Lote', readMaterialControl.handle)

//reports
router.post('/reports/create', createReportControl.handle)
router.put('/reports/update/:Code', updateReportControl.handle)

export default router
