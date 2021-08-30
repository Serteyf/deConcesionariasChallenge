--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4
-- Dumped by pg_dump version 13.4

-- Started on 2021-08-30 13:12:51

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- TOC entry 3035 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 204 (class 1259 OID 32840)
-- Name: Categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Categories" (
    id integer NOT NULL,
    name character varying(255),
    icon character varying(255)
);


--
-- TOC entry 203 (class 1259 OID 32838)
-- Name: Categories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."Categories_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3036 (class 0 OID 0)
-- Dependencies: 203
-- Name: Categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."Categories_id_seq" OWNED BY public."Categories".id;


--
-- TOC entry 206 (class 1259 OID 32851)
-- Name: Properties; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Properties" (
    id integer NOT NULL,
    name character varying(255),
    "categoryId" integer
);


--
-- TOC entry 205 (class 1259 OID 32849)
-- Name: Properties_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."Properties_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3037 (class 0 OID 0)
-- Dependencies: 205
-- Name: Properties_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."Properties_id_seq" OWNED BY public."Properties".id;


--
-- TOC entry 200 (class 1259 OID 32825)
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


--
-- TOC entry 208 (class 1259 OID 32864)
-- Name: VehicleProperties; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."VehicleProperties" (
    id integer NOT NULL,
    value integer DEFAULT 0,
    "propertyId" integer NOT NULL,
    "vehicleId" integer NOT NULL
);


--
-- TOC entry 207 (class 1259 OID 32862)
-- Name: VehicleProperties_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."VehicleProperties_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3038 (class 0 OID 0)
-- Dependencies: 207
-- Name: VehicleProperties_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."VehicleProperties_id_seq" OWNED BY public."VehicleProperties".id;


--
-- TOC entry 202 (class 1259 OID 32832)
-- Name: Vehicles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Vehicles" (
    id integer NOT NULL,
    name character varying(255)
);


--
-- TOC entry 201 (class 1259 OID 32830)
-- Name: Vehicles_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."Vehicles_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3039 (class 0 OID 0)
-- Dependencies: 201
-- Name: Vehicles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."Vehicles_id_seq" OWNED BY public."Vehicles".id;


--
-- TOC entry 2874 (class 2604 OID 32843)
-- Name: Categories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Categories" ALTER COLUMN id SET DEFAULT nextval('public."Categories_id_seq"'::regclass);


--
-- TOC entry 2875 (class 2604 OID 40983)
-- Name: Properties id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Properties" ALTER COLUMN id SET DEFAULT nextval('public."Properties_id_seq"'::regclass);


--
-- TOC entry 2876 (class 2604 OID 32867)
-- Name: VehicleProperties id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."VehicleProperties" ALTER COLUMN id SET DEFAULT nextval('public."VehicleProperties_id_seq"'::regclass);


--
-- TOC entry 2873 (class 2604 OID 32835)
-- Name: Vehicles id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Vehicles" ALTER COLUMN id SET DEFAULT nextval('public."Vehicles_id_seq"'::regclass);


--
-- TOC entry 3025 (class 0 OID 32840)
-- Dependencies: 204
-- Data for Name: Categories; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."Categories" VALUES (1, 'Documentacion', '"fas fa-paste"');
INSERT INTO public."Categories" VALUES (2, 'Carroceria', '"fas fa-car"');
INSERT INTO public."Categories" VALUES (3, 'Motor', '"fas fa-gas-pump"');


--
-- TOC entry 3027 (class 0 OID 32851)
-- Dependencies: 206
-- Data for Name: Properties; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 3021 (class 0 OID 32825)
-- Dependencies: 200
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."SequelizeMeta" VALUES ('20210824033259-create-vehicle.js');
INSERT INTO public."SequelizeMeta" VALUES ('20210824033430-create-category.js');
INSERT INTO public."SequelizeMeta" VALUES ('20210824033623-create-property.js');
INSERT INTO public."SequelizeMeta" VALUES ('20210824033815-create-vehicle-property.js');


--
-- TOC entry 3029 (class 0 OID 32864)
-- Dependencies: 208
-- Data for Name: VehicleProperties; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 3023 (class 0 OID 32832)
-- Dependencies: 202
-- Data for Name: Vehicles; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 3040 (class 0 OID 0)
-- Dependencies: 203
-- Name: Categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."Categories_id_seq"', 1, false);


--
-- TOC entry 3041 (class 0 OID 0)
-- Dependencies: 205
-- Name: Properties_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."Properties_id_seq"', 74, true);


--
-- TOC entry 3042 (class 0 OID 0)
-- Dependencies: 207
-- Name: VehicleProperties_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."VehicleProperties_id_seq"', 628, true);


--
-- TOC entry 3043 (class 0 OID 0)
-- Dependencies: 201
-- Name: Vehicles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."Vehicles_id_seq"', 99, true);


--
-- TOC entry 2883 (class 2606 OID 32848)
-- Name: Categories Categories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Categories"
    ADD CONSTRAINT "Categories_pkey" PRIMARY KEY (id);


--
-- TOC entry 2885 (class 2606 OID 40977)
-- Name: Properties Properties_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Properties"
    ADD CONSTRAINT "Properties_pkey" PRIMARY KEY (id);


--
-- TOC entry 2879 (class 2606 OID 32829)
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- TOC entry 2887 (class 2606 OID 32869)
-- Name: VehicleProperties VehicleProperties_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."VehicleProperties"
    ADD CONSTRAINT "VehicleProperties_pkey" PRIMARY KEY (id);


--
-- TOC entry 2881 (class 2606 OID 32837)
-- Name: Vehicles Vehicles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Vehicles"
    ADD CONSTRAINT "Vehicles_pkey" PRIMARY KEY (id);


--
-- TOC entry 2888 (class 2606 OID 32857)
-- Name: Properties Properties_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Properties"
    ADD CONSTRAINT "Properties_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."Categories"(id);


--
-- TOC entry 2890 (class 2606 OID 40999)
-- Name: VehicleProperties VehicleProperties_propertyId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."VehicleProperties"
    ADD CONSTRAINT "VehicleProperties_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES public."Properties"(id) ON DELETE CASCADE;


--
-- TOC entry 2889 (class 2606 OID 40994)
-- Name: VehicleProperties VehicleProperties_vehicleId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."VehicleProperties"
    ADD CONSTRAINT "VehicleProperties_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES public."Vehicles"(id) ON DELETE CASCADE;


-- Completed on 2021-08-30 13:12:51

--
-- PostgreSQL database dump complete
--

