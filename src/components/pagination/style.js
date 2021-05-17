import styled from 'styled-components'

export const PaginationWrapper  = styled.div`
    .pagination-container{
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .pagination-container .pagination{
        display: flex;
        flex-direction: row;
    }
    .pagination-container li{
        padding: 5px 10px;
        background:#131519;
        border-radius: .6rem;
    }
    .pagination-container .active{
        background: #3bb33b;
    }
    p{
        line-height: 3rem;
    }
`