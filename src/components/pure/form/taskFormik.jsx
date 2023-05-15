import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';


const TaskFormik = ({ add, length }) => {

    const initialValues = {
        name: "",
        description: "",
        completed: false,
        level: ""
    }

    const taskSchema = Yup.object().shape(
        {
            name: Yup.string()
                .required("Name of task is required"),
            description: Yup.string()
                .required("Description of task is required"),
            completed: Yup.boolean(),
            level: Yup.string()
        }
    )

    function addTask(values){
        const level = values.picked
        const newTask = new Task(
            values.name,
            values.description,
            values.completed,
            level
        );
        add(newTask);
    }

    return (
        <div>
            <h4>Add task</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={taskSchema}
                onSubmit={(values) => {
                    addTask(values)
                }}
            >
                {({ errors, touched, isSubmitting, values, handleChange, handleBlur }) => (
                    <Form>
                        <label htmlFor="name">Name task</label>
                        <Field id="name" type="text" name="name" placeholder="Task name" />
                        {
                            errors.name && touched.name &&
                            (
                                <ErrorMessage name='name' component="div" />
                            )
                        }
                        <label htmlFor="description">Task description</label>
                        <Field id="description" type="text" name="description" placeholder="Task description" />
                        {
                            errors.description && touched.description &&
                            (
                                <ErrorMessage name='description' component="div" />
                            )
                        }
                        <div id="my-radio-group">Select a level</div>
                        <div role="group" aria-labelledby="my-radio-group">
                            <label>
                                <Field type="radio" name="picked" value={LEVELS.NORMAL} />
                                Normal
                            </label>
                            <label>
                                <Field type="radio" name="picked" value={LEVELS.URGENT} />
                                Urgent
                            </label>
                            <label>
                                <Field type="radio" name="picked" value={LEVELS.BLOCKING} />
                                Blocking
                            </label>
                            <div>Picked: {values.picked}</div>
                        </div>
                        <button type="submit">Submit</button>
                        {isSubmitting ? (<p>Agregando la tarea...</p>) : null}
                    </Form>
                )}
            </Formik>

        </div>
    );
}

export default TaskFormik;
