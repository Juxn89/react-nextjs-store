import React, { useEffect, useState } from 'react';
import FormProduct from '@components/FormProducts';
import { useRouter } from 'next/router';
import axios from 'axios';
import endPoints from '@services/api';

const Edit = () => {
    const router = useRouter();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const { id } = router.query;

        if(!router.isReady) return;

        const idProduct:number = parseInt(id as string);

        async function getProduct () {
            const respose = await axios.get(endPoints.products.getProduct(idProduct));
            setProduct(respose.data);
        };

        getProduct();

    }, [router?.isReady]);

    return (
        <FormProduct setOpen={undefined} setAlert={undefined} Product={ product }/>
    )
};

export default Edit;
