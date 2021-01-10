import { connect } from "react-redux";

const Video = ({ activeModule, activeLesson }) => 
    <div>
        <strong>Modulo {activeModule.title}</strong>
        <span>Lesson {activeLesson.title}</span>
    </div>

const mapStateToProps = state => ({
    activeModule: state.course.activeModule,
    activeLesson: state.course.activeLesson,
})

export default connect(mapStateToProps)(Video);