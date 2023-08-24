//Pass reusable logic down as props to components throughout your application
import React from "react";

//日志记录 HOC
function withLogging(Component) {
    return class extends React.Component {
        componentDidMount() {
            console.log('Component is mounted');
        }

        componentWillUnmount() {
            console.log('Component is unmounted');
        }

        render() {
            return <Component {...this.props} />;
        }
    }
}

const MyComponent = () => {
    return <div>My Component</div>;
}

const MyComponentWithLogging = withLogging(MyComponent);

//权限控制 HOC
function withAuthorization(Component, allowedRoles) {
    return class extends React.Component {
        render() {
            const currentUserRole = getCurrentUserRole();

            if (allowedRoles.includes(currentUserRole)) {
                return <Component {...this.props} />;
            } else {
                return null; // 或者显示一个无权限的提示信息
            }
        }
    }
}

const MyComponent = () => {
    return <div>My Component</div>;
}

const AuthorizedComponent = withAuthorization(MyComponent, ['admin', 'manager']);

function withStyles(Component, styles) {
    return class extends React.Component {
        render() {
            const mergedStyles = { ...defaultStyles, ...styles };

            return <Component {...this.props} styles={mergedStyles} />;
        }
    }
}

//样式增强 HOC
const MyComponent = ({ styles }) => {
    return <div style={styles}>My Component</div>;
}

const StyledComponent = withStyles(MyComponent, { color: 'red' });
