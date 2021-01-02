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


    fetchData = () => {
        this.setState({ loading: true, error: null });  // We initialize again the values of login and error in case that fetchData() is called again

        const url = "https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@xavier_perez21";

        fetch(url)
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
        // console.log("yo primero")
        this.fetchData();
    }

    render() {
        if (this.state.loading === true && !this.state.data) {
            return <PageLoading />;
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />
        }

        // console.log("luego yo")
        let courses = this.state.data;
        // console.log(courses)

        return(
            <div className="education__container">
                    <div className="courses__title">
                        <h2>JavaScript, Frontend and Backend</h2>
                    </div>
                    <div className="education__courses javascript-courses">
                        {
                            courses.map(course => {
                                if (course.career === "Arquitectura Frontend" || course.career === "JavaScript" || course.career === "Backend con JavaScript") {
                                    if(course.title.includes("Prework")) return null;
                                    
                                    return (
                                        <a key={course.id} className="courses-item__link" href={`https://platzi.com${course.diploma_link}`} target="_blank" rel="noreferrer">
                                            <div className="courses-item">
                                                <img src={course.badge} alt="course"/>
                                                <p>{course.title}</p>
                                            </div>
                                        </a>
                                    );
                                }
                                return null;
                            })
                        }
                    </div>

                    <div className="courses__title">
                        <h2>Python</h2>
                    </div>
                    <div className="education__courses python-courses">
                        {
                            courses.map(course => {
                                if (course.career === "Big Data y Data Science" || course.career === "Desarrollo Backend con Python y Django") {
                                    if(course.title.includes("Prework")) return null;
                                    
                                    return (
                                        <a key={course.id} className="courses-item__link" href={`https://platzi.com${course.diploma_link}`} target="_blank" rel="noreferrer">
                                            <div className="courses-item">
                                                <img src={course.badge} alt="course"/>
                                                <p>{course.title}</p>
                                            </div>
                                        </a>
                                    );
                                }
                                return null;
                            })
                        }
                    </div>

                    <div className="courses__title">
                        <h2>PHP</h2>
                    </div>
                    <div className="education__courses php-courses">
                        {
                            courses.map(course => {
                                if (course.title.includes("PHP")) {
                                    if(course.title.includes("Prework")) return null;
                                    
                                    return (
                                        <a key={course.id} className="courses-item__link" href={`https://platzi.com${course.diploma_link}`} target="_blank" rel="noreferrer">
                                            <div className="courses-item">
                                                <img src={course.badge} alt="course"/>
                                                <p>{course.title}</p>
                                            </div>
                                        </a>
                                    );
                                }
                                return null;
                            })
                        }
                    </div>

                    <div className="courses__title">
                        <h2>Basics, tools and more</h2>
                    </div>
                    <div className="education__courses tools_and_more-courses">
                        {
                            courses.map(course => {
                                if (course.career === "Desarrollo Backend con Ruby") {
                                    if(course.title.includes("Prework")) return null;
                                    
                                    return (
                                        <a key={course.id} className="courses-item__link" href={`https://platzi.com${course.diploma_link}`} target="_blank" rel="noreferrer">
                                            <div className="courses-item">
                                                <img src={course.badge} alt="course"/>
                                                <p>{course.title}</p>
                                            </div>
                                        </a>
                                    );
                                }
                                return null;
                            })
                        }
                    </div>
            </div>
        );
    }
}

export default Courses;