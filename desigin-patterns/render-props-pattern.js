//Pass JSX elements to components through props
import React from 'react';

// 定义一个 Render Props 组件
class RenderPropsComponent extends React.Component {
    state = {
        data: 'Hello, World!'
    };

    render() {
        const { data } = this.state;
        const { render } = this.props;

        return render(data);
    }
}

// 使用 Render Props 组件
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Render Props Pattern Demo</h1>
                <RenderPropsComponent
                    render={data => (
                        <p>{data}</p>
                    )}
                />
            </div>
        );
    }
}

export default App;
