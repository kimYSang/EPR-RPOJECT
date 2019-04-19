import React, { Component } from 'react';

import store from '../stores'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as projectActions from '../stores/modules/projectState';
import * as pfileAction from '../stores/modules/pfileState'
import * as attachmentAction from '../stores/modules/attachmentState'


import { ProjectSideBar } from '../components/ProjectSideBar';


class ProjectSideBarContainer extends Component {
    constructor(props) {
        super(props);
        this.handleDirItemClick = this.handleDirItemClick.bind(this);
    }
    componentDidMount() {
        const { userInfo } = store.getState().userState;
        const memberInfo = userInfo.memberInfo;
        
        const { ProjectActions } = this.props;
        ProjectActions.list(memberInfo.mid, memberInfo.name);
    }
    
    handleDirItemClick (selectedDirId) {
        const { ProjectActions, PfileActions, AttachmentAction, projectState } = this.props;
        if(projectState.get('selectedDirId') && projectState.get('selectedDirId') !== selectedDirId){
            PfileActions.getPfile(selectedDirId);
            AttachmentAction.getAttachment(selectedDirId);
        }
        ProjectActions.saveItem({ selectedDirId, detailViewLevel: 'project' });        
    };

    render() {
        const { projectState } = store.getState();
        
        const { ProjectActions } = this.props;
        
        return (
            <ProjectSideBar 
                projectState={projectState} 
                ProjectActions={ProjectActions}
                handleDirItemClick={this.handleDirItemClick}
            ></ProjectSideBar>
        );
    }
}

export default connect(
    (state) => ({
        projectState: state.projectState,
        userState: state.userState,
    }),
    (dispatch) => ({
        ProjectActions: bindActionCreators(projectActions, dispatch),
        PfileActions: bindActionCreators(pfileAction, dispatch),
        AttachmentAction: bindActionCreators(attachmentAction, dispatch),
    })
) (ProjectSideBarContainer);