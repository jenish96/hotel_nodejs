require('./config/mongo');
const express = require('express');
const app = express();
const cors = require('cors');
const auth = require('./middleware/auth')

app.use(express.json());
app.use(cors())
app.use(auth)

app.use('/', require('./routes/hotelType/index'))
app.use('/', require('./routes/hotel/index'))
app.use('/', require('./routes/room/index'))
app.use('/', require('./routes/user/index'))
app.use('/', require('./routes/contactUs/index'))
app.use('/', require('./routes/booking/index'))
app.use('/', require('./routes/city/index'))
app.use('/', require('./routes/state/index'))
app.use('/', require('./routes/admin/index'))


app.listen('5000')