--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: spending; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.spending (
    id integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    "createdAt" date DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.spending.id;


--
-- Name: spending id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.spending ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: spending; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.spending VALUES (1, 'comida', 300, '2023-01-18');
INSERT INTO public.spending VALUES (2, 'teste', 300, '2023-01-18');
INSERT INTO public.spending VALUES (3, 'compra', 600, '2023-01-18');
INSERT INTO public.spending VALUES (6, 'regarga', 50, '2023-01-18');
INSERT INTO public.spending VALUES (7, 'regarga', 2000, '2023-01-18');
INSERT INTO public.spending VALUES (8, 'regarga', 10000, '2023-01-18');
INSERT INTO public.spending VALUES (9, 'regarga', 9000, '2023-01-18');
INSERT INTO public.spending VALUES (10, 'regarga', 5500, '2023-01-18');


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 10, true);


--
-- Name: spending users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.spending
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

