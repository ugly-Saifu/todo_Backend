const {Router} = require("express"); // destructuring
const { getToDo, updateToDo } = require("../controllers/ToDoController");
const { saveToDo} =  require("../controllers/ToDoController");
const { deleteToDo} =  require("../controllers/ToDoController");


const router = Router()

router.get('/', getToDo)

router.post('/save', saveToDo)

router.post('/update', updateToDo)

router.post('/delete', deleteToDo)

module.exports = router;