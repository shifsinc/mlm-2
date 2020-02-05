export const globalVars = {
    domain: 'http://localhost:8001',
    filesDomain: 'http://localhost:8001/',
    
    language: 'es',
    moneda: 'BOL'
};

export const globalConfigurations = {};

export const globalImages = {
};

export var jobs = [];

export const globalImagesSize = {
    widthScale: 768,
    heightScale: 1024, //xga
    thumbWidth: 480,
    thumbHeight: 640 //vga
};
export const globalRoutes = {
    person: 'api/v1/qperson',
    personInvitation: 'api/v1/personInvitation',
    personAssociated: 'api/v1/personAssociated',
    company: 'api/v1/qcompany',
    job: 'api/v1/qjob',
    location: 'api/v1/qlocation',
    invitation: 'api/v1/invitation',
    invitationQuick: 'api/v1/qinvitation',
    context:'api/v1/qcontext',
    contextact:'api/v1/qcontext?estado=1',
    typecontext:'api/v1/qtypecontext',
    typecontextact:'api/v1/qtypecontext?estado=1',

    user: 'api/v1/quser',
    login: 'api/v1/login',
    register: 'api/v1/register'
};
