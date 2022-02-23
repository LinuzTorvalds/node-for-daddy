import { Request, Response, Router } from 'express'

//users
import SignUpUserControl from './controllers/users/SignUp'
import SignInUserControl from './controllers/users/SignIn'
import UpdateUserControl from './controllers/users/Update'
import CreateTokenUserControl from './controllers/users/CreateToken'
import KeepConnectUserControl from './controllers/users/KeepConnect'
import DeleteTokenUserControl from './controllers/users/DeleteToken'

//materials
import CreateMaterialControl from './controllers/material/Create'
import DeleteMaterialControl from './controllers/material/Delete'
import UpdateMaterialControl from './controllers/material/Update'
import ListMaterialControl from './controllers/material/List'
import ReadMaterialControl from './controllers/material/Read'

//reports
import CreateReportControl from './controllers/report/Create'
import UpdateReportControl from './controllers/report/Update'
import ReportMaterialControl from './controllers/report/ReportMaterial'
import ReportTimeControl from './controllers/report/ReportTime'

//users
const signUpUserControl = new SignUpUserControl()
const signInUserControl = new SignInUserControl()
const updateUserControl = new UpdateUserControl()
const createTokenUserControl = new CreateTokenUserControl()
const keepConnectUserControl = new KeepConnectUserControl()
const deleteTokenUserControl = new DeleteTokenUserControl()

//materials
const createMaterialControl = new CreateMaterialControl()
const deleteMaterialControl = new DeleteMaterialControl()
const updateMaterialControl = new UpdateMaterialControl()
const listMaterialControl = new ListMaterialControl()
const readMaterialControl = new ReadMaterialControl()

//reports
const createReportControl = new CreateReportControl()
const updateReportControl = new UpdateReportControl()
const reportMaterialControl = new ReportMaterialControl()
const reportTimeControl = new ReportTimeControl()

const router = Router()

//home
router.get('/', (request: Request, response: Response) => {
  response.send('Ready :) ^-^')
})

//users
router.post('/users/signup', signUpUserControl.handle)
router.post('/users/signin', signInUserControl.handle)
router.put('/users/update/:Code', updateUserControl.handle)
router.post('/users/createtoken', createTokenUserControl.handle)
router.post('/users/keepconnect', keepConnectUserControl.handle)
router.post('/users/deletetoken', deleteTokenUserControl.handle)

//materials
router.post('/materials/create', createMaterialControl.handle)
router.delete('/materials/delete/:Id', deleteMaterialControl.handle)
router.put('/materials/update/:Id', updateMaterialControl.handle)
router.get('/materials/list', listMaterialControl.handle)
router.get('/materials/read/:Lote', readMaterialControl.handle)

//reports
router.post('/reports/create', createReportControl.handle)
router.put('/reports/update/:Code', updateReportControl.handle)
router.post('/reports/material', reportMaterialControl.handle)
router.post('/reports/time', reportTimeControl.handle)

export default router
