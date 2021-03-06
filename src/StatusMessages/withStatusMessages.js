// Copyright 1999-2018. Plesk International GmbH. All rights reserved.

import { createElement, PropTypes } from '@plesk/ui-library';

const withStatusMessages = Component => {
    const C = (props, context) => (
        <Component statusMessages={context.statusMessages} {...props} />
    );

    C.contextTypes = {
        statusMessages: PropTypes.object,
    };
    C.displayName = `withStatusMessages(${Component.displayName || Component.name})`;
    C.WrappedComponent = Component;

    return C;
};

export default withStatusMessages;
