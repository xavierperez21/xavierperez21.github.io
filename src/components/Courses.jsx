import React from 'react';

import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

import './styles/Courses.css'

class Courses extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
    }


    fetchData = async () => {
        this.setState({ loading: true, error: null });  // We initialize again the values of login and error in case that fetchData() is called again

        const url = "https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@xavier_perez21";

        await fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    loading: false,
                    data: result.userData.courses
                });
            },
            // Nota: es importante manejar errores aquí y no en 
            // un bloque catch() para que no interceptemos errores
            // de errores reales en los componentes.
            (error) => {
                this.setState({
                    loading: true,
                    error
                });
            }
        )
    }

    componentDidMount() {
        console.log("yo primero")
        this.fetchData();
    }

    render() {
        if (this.state.loading === true && !this.state.data) {
            return <PageLoading />;
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />
        }

        console.log("luego yo")
        let courses = this.state.data.reverse();

        console.log(courses)

        return(
            <div className="education__courses">
                {
                    courses.map(course => {
                        return (
                            <a key={course.id} className="courses-item__link" href={`https://platzi.com${course.diploma_link}`} target="_blank" rel="noreferrer">
                                <div className="courses-item">
                                    <img src={course.badge} alt="course"/>
                                    <p>{course.title}</p>
                                </div>
                            </a>
                        );
                    })
                }
            </div>
        );
    }
}

export default Courses;